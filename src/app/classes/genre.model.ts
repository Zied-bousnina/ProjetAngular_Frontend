// import { Genre } from './genre';

import { Genre } from "./genre";

export class GenreWrapper {
    _embedded!: {genres: Genre[]}
}
