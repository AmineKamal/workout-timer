
export interface ComponentAction<T> {
    name: string;
    action: (input: T) => void;
    quit?: boolean;
}
