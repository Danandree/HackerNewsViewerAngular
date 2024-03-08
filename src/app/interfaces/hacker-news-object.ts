export interface HackerNewsObject {
    [key: string]: any;
    id: number;
    by: string;
    descendants: number;
    kids?: number[];
    score: number;
    text?: string;
    title: string;
    time: number;
    type: string;
    url?: string;
}

export class NEWS implements HackerNewsObject {
    [key: string]: any;
    id = 0;
    by = '';
    descendants = 0;
    kids: number[] = [];
    score = 0;
    text = '';
    title = '';
    time = 0;
    type = '';
    url?: string;
    date?: string;
    domain?: string;

}
