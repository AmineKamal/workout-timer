import { BehaviorSubject } from 'rxjs';

const PAGES = ['home', 'workouts', 'exercices', 'weight-tracker'] as const;
export type Page = typeof PAGES[number];

export const State = new class
{
    loaded = new BehaviorSubject(false);
    currentPage = new BehaviorSubject<Page>('home');
}
();
