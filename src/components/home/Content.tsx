import { Dictionary, Meaning } from "@/models/Dictionary"
import { TitleWord } from "./TitleWorld"
import { SectionInfo } from "./SectionInfo"

type ContentProps = {
    dictionaries: Dictionary[]
}
export const Content = ({ dictionaries }: ContentProps) => {
    let infoPartOfSpeech: Meaning[] = [];
    for (const { meanings } of dictionaries) {
        for (const meaning of meanings.filter(({ partOfSpeech }) => !!partOfSpeech)) {
            const existPartOfSpeech = !!infoPartOfSpeech.filter(({ partOfSpeech }) => partOfSpeech === meaning.partOfSpeech).length;
            if(!existPartOfSpeech)
                infoPartOfSpeech.push(meaning);
        }
    }
    
    return (
        <div className="mt-10">
            <TitleWord dictionaries={dictionaries} />
            {
                infoPartOfSpeech.map((meaning, index) => (<SectionInfo key={`${index}-meaning-${meaning.partOfSpeech}`} meaning={meaning} />))
            }
            {/*  */}

        </div>
    )
}