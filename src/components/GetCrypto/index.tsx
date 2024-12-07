import React, { useState, FC, useEffect } from "react";
import { Col, Row, Select, Input } from "antd";
import { defaultCurrency, maxHistory } from "../../constants/currency";
import useSWR from "swr";
import "./style.scss";
import { cryptoDTO } from "./typing";
import Modal from "../Modal";

export const GetCrypto: FC = (): JSX.Element => {
    const [currency, setCurrency] = useState(defaultCurrency);
    const [text, setText] = useState(defaultCurrency);
    const [codeHistory, setHistory] = useState([] as string[]);
    const { data, error, isLoading } = useSWR(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
        (...args) => fetch(...args).then((res) => res.json())
    );
    const [showModal, setModal] = useState(false);
    const [modalItem, setModalItem] = useState({} as cryptoDTO);

    const clearText = () => {
        setText("");
    };

    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        const filterlist = codeHistory.filter((item) => item !== currency);
        setHistory([
            currency,
            ...(filterlist.length >= maxHistory ? filterlist.slice(1, filterlist.length) : filterlist),
        ]);
    }, [currency]);
    // console.log(data, error, isLoading);
    return (
        <div className="crypto-page">
            <div className="header-section">
                <Row className="search-header">
                    <Col className="box-header" xs={24} md={24} xl={24}>
                        <h3 className="text-label">Search Currency</h3>
                        <div className="search-box">
                            <Input
                                allowClear
                                className="search-code"
                                placeholder="Enter Currency Code"
                                onChange={(e) => {
                                    const code: string = e?.target?.value;
                                    setText(code);
                                    if (code.length >= 3) {
                                        setCurrency(code);
                                    }
                                }}
                                value={text}
                            />
                            <Select
                                placeholder={"Currency Code"}
                                aria-label="Select Currency"
                                className="currency-select"
                                onChange={(e: string) => {
                                    clearText();
                                    setCurrency(e);
                                }}
                                value={currency}
                                options={codeHistory.map((item) => ({ value: item, label: item }))}
                            ></Select>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="body-section">
                {isLoading && <p>Loading...</p>}
                {!isLoading && error && <p>Error: {error}</p>}
                {!isLoading && data && data.length > 0 ? (
                    <ul className="crypto-list">
                        <Row>
                            {data.map((item: any) => (
                                <Col key={item?.id} xs={24} md={12} xl={6}>
                                    <li>
                                        <img width={80} height={80} src={item?.image} alt={item.symbol} />
                                        <div className="content">
                                            <div className="name" title={item?.name}>
                                                Name: {item?.name}
                                            </div>
                                            <div>Price: {item?.current_price}</div>
                                            <div>Currency: {currency}</div>
                                            <div>
                                                <a
                                                    onClick={(e) => {
                                                        setModalItem(item);
                                                        setModal(true);
                                                    }}
                                                >
                                                    View More
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </Col>
                            ))}
                        </Row>
                    </ul>
                ) : (
                    data && <p>Error: {JSON.stringify(data?.error || data?.status?.error_message)}</p>
                )}
            </div>
            {showModal && <Modal item={modalItem} currency={currency} onBackdropClick={closeModal} />}
        </div>
    );
};
