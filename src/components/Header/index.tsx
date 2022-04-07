import SearchArea from "../SearchArea";

type Props = {
    changeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    callSearch: () => void
}

export default function Header({ changeInputValue, inputValue, callSearch }: Props) {
    return (
        <header>
            <h1 className='page-title'>Are you curious? 👀</h1>
            <SearchArea
                changeInputValue={changeInputValue}
                inputValue={inputValue}
                callSearch={callSearch}
            />
        </header>
    )
}