import { animeList } from "../../services/api";

type Props = {
    callSearch: (method: string, itemName: string) => void
}

export default function Footer({ callSearch }: Props) {
    return (
        <div className='all-animes'>
            {animeList.map((item, index: number) => (
                <div key={index}>
                    <p onClick={
                        () => {
                            callSearch("search", item)
                        }
                    }>
                        {item}
                    </p>
                    <span>·</span>
                </div>
            ))}
        </div>
    )
}