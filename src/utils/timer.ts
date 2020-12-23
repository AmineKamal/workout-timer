import { gte } from './number';

type Action<I, O> = (input: I) => O;

export class Timer {
  private subscribers: Action<number, void>[] = [];
  private callbacks: { [time: number]: TimerCallback } = {};
  private interval!: number;
  private remaining!: number;
  private resolve!: (val?: void | PromiseLike<void>) => void;
  private reject: (reason?: any) => void;

  public constructor(private precision = 1000) {}

  public subscribe(action: Action<number, void>) {
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

    return new Promise<void>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.remaining = Math.floor(time / this.precision);
      this.interval = setInterval(() => this.decrement(), this.precision) as unknown as number;
      this.publish();
    });
  }

  public pause() {
    clearInterval(this.interval);
  }

  public resume() {
    this.interval = setInterval(() => this.decrement(), this.precision) as unknown as number;
  }

  public stop(force = true) {
    clearInterval(this.interval);
    if (force) { this.reject(); }
    else { this.resolve(); }
  }

  private decrement() {
    this.remaining--;
    this.publish();

    if (this.remaining === 0) {
      this.stop(false);
    }
  }

  private publish() {
    const seconds = this.toSeconds();

    const callbacks = Object.keys(this.callbacks)
      .map(Number)
      .filter(gte(seconds * 1000))
      .map(key => this.callbacks[key]);

    callbacks.forEach(cb => cb.run());

    this.subscribers.forEach(s => s(seconds));
  }

  private toSeconds() {
    const ms = this.remaining * this.precision;
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
