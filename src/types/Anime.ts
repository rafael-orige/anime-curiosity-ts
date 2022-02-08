export type Anime = {
    success: boolean,
    img: string,
    total_facts: number,
    data: Array<{
        fact_id: number,
        fact: string
    }>
}