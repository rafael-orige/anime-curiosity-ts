const url: string = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
let input: string;

const getApi = async (method: string, querie: string) => {
    switch (method) {
        case "search":
            window.history.replaceState(null, querie, "?q=" + querie);
            document.title = querie;
            if (querie === "Fullmetal Alchemist: Brotherhood") querie = "fma_brotherhood";
            input = querie.toLowerCase().replace(/ /g, "_");
            break;

        default:
            break;
    }
    try {
        let res = await fetch(url + input);
        var json = await res.json();
    }
    catch (event) {
        console.error("Não funcionou..." + event);
    }
    return json;
}

export const animeList: string[] = [
    "Bleach",
    "Black Clover",
    "Dragon Ball",
    "Jujutsu Kaisen",
    "Fullmetal Alchemist: Brotherhood",
    "Naruto",
    "Gintama",
    "Itachi Uchiha",
    "Demon Slayer",
    "Attack on Titan",
    "Hunter X Hunter",
    "Boku no Hero Academia",
    "One Piece",
]

export default getApi;