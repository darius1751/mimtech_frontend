import { License } from "./License.model";

export interface Phonetic {
    audio: string;
    sourceUrl?: string;
    license?: License;
    text?: string;
}