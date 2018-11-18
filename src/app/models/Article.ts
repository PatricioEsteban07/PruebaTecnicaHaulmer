import { Time } from "@angular/common";

export class Article {
    id: number;
    deleted: boolean;
    type: string;
    time: number;
    text: string;
    dead: boolean;
    parent: number;
    poll: number;
    kids: number[];
    score: number;
    title: string;
    parts: number[];
    descendants: number;
  }