import { License } from "./License.model";
import { Meaning } from "./Meaning.model";
import { Phonetic } from "./Phonetic.model";

export interface Dictionary {
    word: string;
    phonetics: Phonetic[];
    phonetic?: string;
    meanings: Meaning[];
    license?: License;
    sourceUrls?: string[];
}