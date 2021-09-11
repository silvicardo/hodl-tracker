export interface Descriptions {
    en: string;
    it: string;
}

export interface CoinDetails {
    whitepaper: string;
    website: string;
    max_supply: number;
    current_supply: number;
    market_cap: number;
    volume_24h: number;
    descriptions: Descriptions;
}

export interface CoinCategory {
    name: string;
    priority: number;
}

export interface Coin {
    symbol: string;
    color: string;
    name: string;
    image: string;
    image_light: string;
    price: number;
    character: string;
    basic: boolean;
    pro: boolean;
    coin_details: CoinDetails;
    locked: boolean;
    is_stable: boolean;
    network: string;
    regex: string;
    category: CoinCategory;
}