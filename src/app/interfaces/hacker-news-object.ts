export interface HackerNewsObject {
    // [key: string]: any;
    id: number;
    title: string;
    time: number;
    url?: string;
    // by: string;
    // descendants: number;
    // kids?: number[];
    // score: number;
    // text?: string;
    // type: string;
}

export class NEWS implements HackerNewsObject {
    // [key: string]: any;
    id = 0;
    title = '';
    time = 0;
    url?: string;
    date?: string;
    domain?: string;
    // by = '';
    // descendants = 0;
    // kids: number[] = [];
    // score = 0;
    // text = '';
    // type = '';

}
