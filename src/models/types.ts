// Types
export type Movie = {
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    vote_average: number,
    budget: number,
    runtime: number,
    revenue: number,
}

export type Movies = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}

export type Cast = {
    // [property: string]: string,

    character: string,
    credit_id: string,
    name: string,
    profile_path: string,
}

export type Crew = {
    job: string,
    name: string,
    credit_id: number,
}

export type Credits = {
    id: number,
    cast: Cast[],
    crew: Crew[],
}
