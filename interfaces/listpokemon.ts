export interface ListPokemon {
    count:    number;
    next?:     string;
    previous?: string;
    results:  OtherPokemon[];
}

export interface OtherPokemon{
    name: string;
    url:  string;
    id: number;
    img: string;
}
