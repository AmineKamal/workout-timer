import { Howl } from 'howler';

export const Sounds = new class
{
    beep = new Howl({ src: 'assets/sounds/short-beep.mp3', html5: true });
    whistle = new Howl({ src: 'assets/sounds/whistle.mp3', html5: true });
    ding = new Howl({ src: 'assets/sounds/ding-sound.mp3', html5: true });
    boxingSound = new Howl({ src: 'assets/sounds/boxing-bell.mp3', html5: true});

    async load()
    {
        await Promise.all([
            this.preload(this.beep),
            this.preload(this.whistle),
            this.preload(this.ding),
            this.preload(this.boxingSound)
        ]);
    }

    private preload(sound: Howl)
    {
        return new Promise<void>((resolve) => {
            sound.load();
            sound.on('load', resolve);
        });
    }
}
();
