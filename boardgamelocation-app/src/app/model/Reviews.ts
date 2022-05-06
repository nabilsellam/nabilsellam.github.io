import { User } from "./User";

export class Review {
    note: number;
    comment: string;
    user: User;

    constructor(note: number, comment: string, user: User) {
        this.note = note;
        this.comment = comment;
        this.user = user;
    }
}