import { BehaviorSubject } from 'rxjs';

const PAGES = ['home', 'workouts', 'exercices'] as const;
export type Page = typeof PAGES[number];

export const State = new class
{
    loaded = new BehaviorSubject(false);
    currentPage = new BehaviorSubject<Page>('home');
}
();
