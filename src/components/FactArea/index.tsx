import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";

type Props = {
    AllFacts: Anime,
    ShowAllFacts: boolean,
    SetAllFacts: () => void
}

export default function FactArea({ AllFacts, ShowAllFacts, SetAllFacts }: Props) {
    const [RandomFact, setRandomFact] = useState<string>("");
    const [NoFacts, setNoFacts] = useState<boolean>(false);

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * AllFacts.data.length);

        if (AllFacts) {
            setRandomFact(AllFacts.data[randomNumber].fact);
        } else if (AllFacts === undefined) {
            setNoFacts(true);
        }
    }, [AllFacts]);

    return (
        <>
            {!NoFacts &&
                <div className='anime-fact'>
                    <div className='anime-cover' >
                        <img src={AllFacts ? AllFacts.img : ""} alt="" />
                    </div>
                    <div className='anime-fact--content'>
                        <h1>Facts:</h1>
                        {!ShowAllFacts &&
                            <h2 className="fact">{RandomFact}</h2>
                        }
                        {ShowAllFacts &&
                            AllFacts?.data.map((
                                item: {
                                    fact_id: number,
                                    fact: string
                                },
                                index: number
                            ) => (
                                <h2 className="fact" key={index}>
                                    {item.fact}
                                </h2>
                            ))
                        }
                        <div className='anime-fact--options'>
                            <p onClick={SetAllFacts}>{ShowAllFacts ? "Hide facts" : "Show all facts"}</p>
                            {!ShowAllFacts &&
                                <p onClick={() => {
                                    setRandomFact(
                                        AllFacts ?
                                            AllFacts.data
                                            [Math.floor(Math.random() * AllFacts.data.length)]
                                                .fact : "");
                                }}>Show another fact</p>
                            }
                        </div>
                    </div>
                </div>
            }
        </>

    )
}