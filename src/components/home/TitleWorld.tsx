import { Dictionary, Phonetic } from "@/models/";
import { PlayIcon } from "../icons/PlayIcon";
type TitleWordProps = {
    dictionaries: Dictionary[];
}
export const TitleWord = ({ dictionaries }: TitleWordProps) => {
    const { word } = dictionaries[0];
    let infoTextAudio: Phonetic[] = [];
    for (const { phonetics } of dictionaries) {
        infoTextAudio = phonetics.filter(({ text, audio }) => !!text || !!audio);
    }
    const text = infoTextAudio.filter(({ text }) => text)[0]?.text;
    const audio = infoTextAudio.filter(({ audio }) => audio)[0]?.audio;

    const handleClickAudio = () => { 
        if(audio){
            const audioWord = new Audio(audio);
            audioWord.play();
        }
        
    }
    return (
        <div className="mt-4 flex justify-between items-center">
            <div>
                <h1 className="text-7xl text-foreground">{word}</h1>
                <small className="text-xl text-purple-900">
                    {
                        text
                    }
                </small>
            </div>
            <div>
                {
                    !!audio && (<div onClick={handleClickAudio}><PlayIcon /></div>)
                }
            </div>
        </div>
    )
}