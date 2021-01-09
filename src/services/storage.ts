import { Exercice, ExercicePreset } from 'src/app/components/exercice-creator/exercice-creator.component';
import { Workout } from 'src/app/components/workout-creator/workout-creator.component';
import { Macros } from 'src/app/weight-tracker/weight-tracker.page';

const STORAGE_KEYS = ['workouts', 'presets', 'exercices', 'weights', 'macros', 'lossPercent', 'hideWeight'] as const;
export type StorageKey = typeof STORAGE_KEYS[number];

export const Storage = new class {
    public workouts: Workout[];
    public presets: ExercicePreset[];
    public exercices: Exercice[];
    public weights: number[];
    public macros: Macros;
    public lossPercent: number;
    public hideWeight: boolean;

    public load() {
        this.workouts = this.get('workouts', []);
        this.presets = this.get('presets', []);
        this.exercices = this.get('exercices', []);
        this.weights = this.get('weights', []);
        this.macros = this.get('macros', {} as Macros);
        this.lossPercent = this.get('lossPercent', 0.005);
        this.hideWeight = this.get('hideWeight', false);
    }

    public update<K extends StorageKey, V extends this[K]>(key: K, f: (v: V) => void) {
        f(this[key] as V);
        this.save(key);
    }

    public save(key: StorageKey) {
        this.set(key, this[key]);
    }

    private set<T>(key: StorageKey, data: T) {
        const str = JSON.stringify(data);
        localStorage.setItem(key, str);
    }

    private get<K extends StorageKey, T extends this[K]>(key: K, def: T): T {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        } else {
            this.set(key, def);
            return def;
        }
    }

}();
