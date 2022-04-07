type Props = {
    changeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    callSearch: () => void
}

export default function SearchArea({ changeInputValue, inputValue, callSearch }: Props) {
    return (
        <form>
            <input
                type="text"
                placeholder="Search here..."
                onChange={changeInputValue} value={inputValue} />
            <button onClick={(event) => {
                event.preventDefault();
                if (inputValue !== "") {
                    callSearch();
                } else {
                    window.alert("Please, write something before submiting!");
                }
            }}>Submit</button>
        </form>
    )
};