export interface cryptoDTO {
    "id": string;
    "symbol": string;
    "name": string;
    "image": string;
    "current_price": number | string;
    "market_cap": number | string;
    "market_cap_rank": number | string;
    "fully_diluted_valuation": number | string;
    "total_volume": number | string;
    "high_24h": number | string;
    "low_24h": number | string;
    "price_change_24h": string;
    "price_change_percentage_24h": number | string;
    "market_cap_change_24h": number | string;
    "market_cap_change_percentage_24h": number | string;
    "circulating_supply": number | string;
    "total_supply": number | string;
    "max_supply": number | string;
    "ath": number | string;
    "ath_change_percentage": string;
    "ath_date": Date;
    "atl": string;
    "atl_change_percentage": string;
    "atl_date": Date;
    "roi": null,
    "last_updated": Date;
}
