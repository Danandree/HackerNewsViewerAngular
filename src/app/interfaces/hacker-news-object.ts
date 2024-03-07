export interface HackerNewsObject {
    [key: string]: any;
    id: number;
    by: string;
    descendants: number;
    score: number;
    text?: string;
    title: string;
    time: number;
    type: string;
    url: string;
}
