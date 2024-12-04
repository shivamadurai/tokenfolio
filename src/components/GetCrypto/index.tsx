import React, { useState, FC } from "react";
import { Col, Row, Select } from "antd";
import { currencies } from "../../constants/currency";
import useSWR from "swr";
import "./style.scss";

export const GetCrypto: FC = () => {
    const [currency, setCurrency] = useState(currencies[0].value);
    const { data, error, isLoading } = useSWR(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`, (...args) => fetch(...args).then((res) => res.json()));
    // console.log(data, error, isLoading);
    return (
        <div className="crypto-page">
            <div className={`filter-dropdown`}>
                <label>Select Currency</label>
                <Select
                    aria-label="Select Currency"
                    className="currency-select"
                    defaultValue={currency}
                    value={currency}
                    onChange={(e: string) => setCurrency(e)}
                    options={currencies}
                ></Select>
            </div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>Error: {error}</p>}
            {!isLoading && data && data.length > 0 ? (
                <ul className="crypto-list">
                    <Row>
                        {data.map((item:any) => (
                            <Col key={item?.id} xs={24} md={12} xl={6}>
                                <li>
                                    <img width={80} height={80} src={item?.image} alt={item.symbol} />
                                    <div className="content">
                                        <div className="name" title={item?.name}>name: {item?.name}</div>
                                        <div>Price: {item?.current_price}</div>
                                        <div>Currency: {currency}</div>
                                    </div>
                                </li>
                            </Col>
                        ))}
                    </Row>
                </ul>
            ): <p>Error: {JSON.stringify(data)}</p>}
        </div>
    );
};
