
export interface CLickToContinue {
    status: 'resolved' | 'pending';
    promise: Promise<void>;
    cancel: (force?: boolean) => void;
}

export function clickToContinue(element: HTMLElement) {
    let cancel: (force: boolean) => void;
    let status: 'resolved' | 'pending' = 'pending';

    const promise = new Promise<void>((resolve, reject) => {
        const onClick = () => {
            element.removeEventListener('click', onClick);
            status = 'resolved';
            resolve();
        };

        cancel = (force = true) => {
            if (status === 'resolved') { return; }
            element.removeEventListener('click', onClick);
            status = 'resolved';

            if (force) { reject(); }
            else { resolve(); }
        };

        element.addEventListener('click', onClick);
    });

    return { cancel, status, promise } as CLickToContinue;
}
