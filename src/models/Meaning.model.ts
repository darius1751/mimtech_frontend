import { Definition } from "./Definition.model";

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}