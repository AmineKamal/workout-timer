import { Workout } from 'src/app/components/workout-creator/workout-creator.component';

const STORAGE_KEYS = ['workouts'] as const;
export type StorageKey = typeof STORAGE_KEYS[number];

export const Storage = new class {
    public workouts: Workout[];

    public load() {
        this.workouts = this.get('workouts', []);
    }

    public update<K extends StorageKey, V extends this[K]>(key: StorageKey, f: (v: V) => void) {
        f(this[key] as V);
        this.save(key);
    }

    public save(key: StorageKey) {
        this.set(key, this[key]);
    }

    private set<T>(key: string, data: T) {
        const str = JSON.stringify(data);
        localStorage.setItem(key, str);
    }

    private get<T>(key: string, def: T): T {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        } else {
            this.set(key, def);
            return def;
        }
    }

}();
