import { Meaning } from "@/models/Dictionary"

type SectionInfoProps = {
    meaning: Meaning
}
export const SectionInfo = ({ meaning }: SectionInfoProps) => {
    const { partOfSpeech, definitions, synonyms } = meaning;
    return (
        <div className="my-4">
            <div className="flex items-center">
                <span className="text-xl italic font-bold">{partOfSpeech}</span>
                <hr className="inline-block w-full ml-4 border-1 border-foreground" />
            </div>

            <div>
                <span className="inline-block text-gray-400 text-xl my-5">Meaning</span>
                <ul>
                    {
                        definitions.map(({ definition }, index) => (
                            <li key={`${index}-section-${meaning.partOfSpeech}`} className="list-disc ml-10">{definition}</li>
                        ))
                    }
                </ul>
            </div>
            {
                synonyms.length > 0
                &&
                (
                    <div className="text-gray-400 text-xl mt-5">
                        <span className="text-xl mr-1">Synonyms</span> {
                            synonyms.map((synonym, index) => (<span key={`${index}-synonyns-${synonym}`} className="text-purple-800 font-bold mr-1">{synonym}</span>))
                        }
                    </div>
                )
            }

        </div>
    )
}