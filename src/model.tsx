interface Origin{
    name : string;
}

export interface Character{
    id : number;
    name : string;
    species: string;
    origin: Origin;
    image: string;
}
export interface Head {
    next: string;
}

export interface Response{
    info: Array<Head>;
    results: Array<Character>;
}