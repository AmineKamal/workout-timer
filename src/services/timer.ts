import { gte } from '../utils/number';

type Action<I, O> = (input: I) => O;

export interface TimerAction {
  remaining: number;
  elapsed: number;
  totalElapsed: number;
}

export class Timer {
  private subscribers: Action<TimerAction, void>[] = [];
  private callbacks: { [time: number]: TimerCallback } = {};
  private interval!: number;
  private remaining!: number;
  private elapsed = 0;
  private totalElapsed = 0;
  private resolve!: (val?: void | PromiseLike<void>) => void;
  private reject: (reason?: any) => void;

  public constructor(private precision = 1000) {}

  public subscribe(action: Action<TimerAction, void>) {
    this.subscribers.push(action);
  }

  public on(t: number | number[], action: Action<void, void>) {
    const times = Array.isArray(t) ? t : [t];

    times.forEach((time) =>
    {
      if (this.callbacks[time]) {
        this.callbacks[time].push(action);
      } else {
        this.callbacks[time] = new TimerCallback(action);
      }
    });

  }

  public start(time: number) {
    const keys = Object.keys(this.callbacks).map(Number);
    keys.forEach(key => this.callbacks[key].unlock());
    this.elapsed = 0;

    return new Promise<void>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.remaining = Math.floor(time / this.precision);
      this.interval = setInterval(() => this.update(), this.precision) as unknown as number;
      this.publish();
    });
  }

  public pause() {
    clearInterval(this.interval);
  }

  public resume() {
    this.interval = setInterval(() => this.update(), this.precision) as unknown as number;
  }

  public back() {
    clearInterval(this.interval);
    this.totalElapsed -= this.elapsed;
    this.remaining += this.elapsed;
    this.elapsed = 0;
    this.interval = setInterval(() => this.update(), this.precision) as unknown as number;
    this.publish();
  }

  public next() {
    clearInterval(this.interval);
    this.totalElapsed += this.remaining;
    this.elapsed += this.remaining;
    this.remaining = 0;
    this.publish();
    this.resolve();
  }

  public stop(force = true) {
    clearInterval(this.interval);
    if (force) { this.reject(); }
    else { this.resolve(); }
  }

  private update() {
    this.remaining--;
    this.elapsed++;
    this.totalElapsed++;

    this.publish();

    if (this.remaining === 0) {
      this.stop(false);
    }
  }

  private publish() {
    const remaining = this.toSeconds(this.remaining);
    const elapsed = this.toSeconds(this.elapsed);
    const totalElapsed = this.toSeconds(this.totalElapsed);

    const callbacks = Object.keys(this.callbacks)
      .map(Number)
      .filter(gte(remaining * 1000))
      .map(key => this.callbacks[key]);

    callbacks.forEach(cb => cb.run());

    this.subscribers.forEach(s => s({remaining, elapsed, totalElapsed}));
  }

  private toSeconds(value: number) {
    const ms = value * this.precision;
    return ms / 1000;
  }
}

class TimerCallback {
  private actions: Action<void, void>[];
  private locked = false;

  public constructor(action?: Action<void, void>) {
    this.actions = action ? [action] : [];
  }

  push(action: Action<void, void>) {
    this.actions.push(action);
  }

  run() {
    if (this.locked) { return; }
    this.actions.forEach(action => action(void 0));
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }
}
