import { Howl } from 'howler';
import { StrictMap } from './types';

const SOUNDS = ['beep', 'whistle', 'ding', 'boxingSound'] as const;
type SoundKey = typeof SOUNDS[number];

const createHowlerSounds: () => StrictMap<SoundKey, Howl> = () =>
{
    return {
        beep: new Howl({ src: 'assets/sounds/short-beep.mp3', html5: true }),
        whistle: new Howl({ src: 'assets/sounds/whistle.mp3', html5: true }),
        ding: new Howl({ src: 'assets/sounds/ding-sound.mp3', html5: true }),
        boxingSound: new Howl({ src: 'assets/sounds/boxing-bell.mp3', html5: true})
    };
};

export const Sounds = new class
{
    private sounds = createHowlerSounds();
    private muted = false;

    public play(sound: SoundKey)
    {
        if (this.muted) { return; }
        this.stopAll();
        this.sounds[sound].play();
    }

    public async load()
    {
        await Promise.all(SOUNDS.map(s => this.preload(this.sounds[s])));
    }

    public mute()
    {
        this.muted = true;
    }

    public unmute()
    {
        this.muted = false;
    }

    private stopAll()
    {
        SOUNDS.forEach((s) => this.sounds[s].stop());
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
