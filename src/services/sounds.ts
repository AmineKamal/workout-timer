import { Howl } from 'howler';

const SOUNDS = ['short-beep', 'whistle', 'ding-sound', 'boxing-bell', 'countdown', 'bell'] as const;
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
            bell: [
              0,
              2000
            ],
            'boxing-bell': [
              3000,
              8249.04761904762
            ],
            countdown: [
              13000,
              5476.213151927439
            ],
            'ding-sound': [
              20000,
              2951.8367346938776
            ],
            'short-beep': [
              24000,
              261.224489795918
            ],
            whistle: [
              26000,
              1226.5986394557835
            ]
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
        if (!this.sound)
        {
            this.sound = createSound();
        }
        else
        {
            this.sound.unload();
            this.sound.load();
        }

        try { this.sound.play(); }
        catch {}

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
