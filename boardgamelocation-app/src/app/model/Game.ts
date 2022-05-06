import { Review } from "./Reviews";

export class Game {
    id: number;
    title: string;
    minPlayers: number;
    maxPlayers: number;
    minDuration: number;
    maxDuration: number;
    minAge: number;
    imgPath: string;
    icoPath: string;
    note: number;
    reviews: Review[];

    constructor(id: number, 
                title: string, 
                minPlayers: number, 
                maxPlayers: number, 
                minDuration: number, 
                maxDuration: number, 
                minAge: number,
                imgPath: string,
                icoPath: string) {
        this.id = id;
        this.title = title;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
        this.minAge = minAge;
        this.note = 0;
        this.reviews = [];
        this.imgPath = imgPath;
        this.icoPath = icoPath;
    }
}