import { Howl } from 'howler';

const SOUNDS = ['short-beep', 'whistle', 'ding-sound', 'boxing-bell', 'countdown'] as const;
type SoundKey = typeof SOUNDS[number];

const createSound: () => Howl = () =>
{
    return new Howl(
    {
        src:
        [
          'assets/sounds/sounds.ogg',
          'assets/sounds/sounds.m4a',
          'assets/sounds/sounds.mp3',
          'assets/sounds/sounds.ac3'
        ],
        sprite:
        {
          'boxing-bell': [0, 8249.04761904762],
          countdown: [10000, 5476.213151927437],
          'ding-sound': [17000, 2951.8367346938776],
          'short-beep': [21000, 261.224489795918],
          whistle: [23000, 1226.5986394557835]
        }
      });
};


export const Sounds = new class
{
    private sound: Howl;
    private muted = false;

    public async play(sound: SoundKey)
    {
        if (this.muted) { return; }
        this.sound.play(sound);
    }

    public async load()
    {
        this.sound = createSound();
        this.sound.play();
        console.log('Sounds have been enabled');
    }

    public mute()
    {
        this.muted = true;
    }

    public unmute()
    {
        this.muted = false;
    }
}
();
