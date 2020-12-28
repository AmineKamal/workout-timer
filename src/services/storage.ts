import { Exercice, ExercicePreset } from 'src/app/components/exercice-creator/exercice-creator.component';
import { Workout } from 'src/app/components/workout-creator/workout-creator.component';

const STORAGE_KEYS = ['workouts', 'presets', 'exercices'] as const;
export type StorageKey = typeof STORAGE_KEYS[number];

export const Storage = new class {
    public workouts: Workout[];
    public presets: ExercicePreset[];
    public exercices: Exercice[];

    public load() {
        this.workouts = this.get('workouts', []);
        this.presets = this.get('presets', []);
        this.exercices = this.get('exercices', []);
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
