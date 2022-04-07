import { render } from "@testing-library/react";
import FactArea from "./index";
import { Anime } from "../../types/Anime";
import getApi from "../../services/api";

it("Should have a list of anime facts", () => {
    let AnimeType: Anime = {
        success: true,
        img: "",
        total_facts: 0,
        data: [{
            fact_id: 0,
            fact: ""
        }]
    };

    const { container } = render(
        <FactArea
            AllFacts={AnimeType}
            ShowAllFacts={false}
            SetAllFacts={() => { }}
        />
    );

    const listEl = container.getElementsByClassName("fact");
    expect(listEl.length).toBeGreaterThan(0);
});

it("Should have a list of anime facts greater than 5 facts", async () => {
    let response: Anime = await getApi("search", "Bleach")
    const { container } = render(
        <FactArea
            AllFacts={response}
            ShowAllFacts={true}
            SetAllFacts={() => { }}
        />
    );

    const listAllFacts = container.getElementsByClassName("fact");
    expect(listAllFacts.length).toBeGreaterThan(5);
});

export { };