const url: string = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
let input: string;

const getApi = async (method: string, querie: string) => {
    switch (method) {
        case "search":
            input = querie.toLowerCase();
            input = input.replace(/ /g, "_");
            break;
    }
    try {
        let res = await fetch(url + input);

        var json = await res.json();
    }
    catch {
        console.error("Não funcionou...");
    }
    return json;
}

export const animeList: Array<{
    animeName: string,
    animeSearch: string
}> = [
        {
            animeName: "Bleach",
            animeSearch: "bleach",
        },
        {
            animeName: "Black Clover",
            animeSearch: "black_clover",
        },
        {
            animeName: "Dragon Ball",
            animeSearch: "dragon_ball",
        },
        {
            animeName: "Jujutsu Kaisen",
            animeSearch: "jujutsu_kaisen",
        },
        {
            animeName: "Fullmetal Alchemist: Brotherhood",
            animeSearch: "fma_brotherhood",
        },
        {
            animeName: "Naruto",
            animeSearch: "naruto",
        },
        {
            animeName: "Gintama",
            animeSearch: "gintama",
        },
        {
            animeName: "Itachi Uchiha",
            animeSearch: "itachi_uchiha",
        },
        {
            animeName: "Demon Slayer",
            animeSearch: "demon_slayer",
        },
        {
            animeName: "Attack on Titan",
            animeSearch: "attack_on_titan",
        },
        {
            animeName: "Hunter X Hunter",
            animeSearch: "hunter_x_hunter",
        },
        {
            animeName: "Boku No Hero Academia",
            animeSearch: "boku_no_hero_academia",
        },
        {
            animeName: "One Piece",
            animeSearch: "one_piece",
        }
    ]

export default getApi;