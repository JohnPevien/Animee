export declare module Anime {

    export interface Jpg {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    }

    export interface Webp {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    }

    export interface Images {
        jpg: Jpg;
        webp: Webp;
    }

    export interface Trailer {
        youtube_id: string;
        url: string;
        embed_url: string;
    }

    export interface Title {
        type: string;
        title: string;
    }

    export interface From {
        day: number;
        month: number;
        year: number;
    }

    export interface To {
        day: number;
        month: number;
        year: number;
    }

    export interface Prop {
        from: From;
        to: To;
        string: string;
    }

    export interface Aired {
        from: string;
        to: string;
        prop: Prop;
    }

    export interface Broadcast {
        day: string;
        time: string;
        timezone: string;
        string: string;
    }

    export interface Producer {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Licensor {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Studio {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Genre {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface ExplicitGenre {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Theme {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Demographic {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Entry {
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }

    export interface Relation {
        relation: string;
        entry: Entry[];
    }

    export interface Theme2 {
        openings: string[];
        endings: string[];
    }

    export interface External {
        name: string;
        url: string;
    }

    export interface Streaming {
        name: string;
        url: string;
    }

    export interface Data {
        mal_id: number;
        url: string;
        images: Images;
        trailer: Trailer;
        approved: boolean;
        titles: Title[];
        title: string;
        title_english: string;
        title_japanese: string;
        title_synonyms: string[];
        type: string;
        source: string;
        episodes: number;
        status: string;
        airing: boolean;
        aired: Aired;
        duration: string;
        rating: string;
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background: string;
        season: string;
        year: number;
        broadcast: Broadcast;
        producers: Producer[];
        licensors: Licensor[];
        studios: Studio[];
        genres: Genre[];
        explicit_genres: ExplicitGenre[];
        themes: Theme[];
        demographics: Demographic[];
        relations: Relation[];
        theme: Theme2;
        external: External[];
        streaming: Streaming[];
    }

    export interface RootObject {
        data: Data;
    }

}

