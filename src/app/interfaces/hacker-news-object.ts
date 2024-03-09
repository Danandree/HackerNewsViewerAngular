export interface HackerNewsObject {
    id: number;
    by: string;
    descendants: number;
    kids?: number[];
    score: number;
    text?: string;
    type: string;
    title: string;
    time: number;
    url?: string;
}

export class NEWS implements HackerNewsObject {
    id = 0;
    title = '';
    time = 0;
    by = '';
    descendants = 0;
    score = 0;
    type = '';
    url?: string;
    date?: string;
    domain?: string;

}
