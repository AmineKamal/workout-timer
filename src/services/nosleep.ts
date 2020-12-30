import NoSleep from 'nosleep.js';

export const noSleep = new class
{
    private enabled = false;
    private noSleep = new NoSleep();

    async restore()
    {
        await this.noSleep.enable();

        if (!this.enabled) {
            this.noSleep.disable();
        }
    }

    async enable()
    {
        this.enabled = true;
        await this.noSleep.enable();
    }

    disable()
    {
        this.enabled = false;
        this.noSleep.disable();
    }
}();
