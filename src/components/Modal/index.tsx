import React, { FC } from "react";
import "./style.scss";
import Props from "./typing";
import { Col, Row } from "antd";
import moment from "moment";

const Modal: FC<Props> = (props): JSX.Element => {
    const { item, currency, modalWrapperClass, onBackdropClick } = props;
    return (
        <React.Fragment>
            <div className={`modal modal-dialog-centered ${modalWrapperClass}`}>
                <div className="overlay" onClick={onBackdropClick}></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button className="modal-close" onClick={onBackdropClick}>X</button>
                        <Row className="detail-view">
                            <Col xs={12} md={12} xl={8}>
                                <img width={80} height={80} src={item?.image} alt={item.symbol} />
                            </Col>
                            <Col xs={12} md={12} xl={16}>
                                <div className="content">
                                    <div className="name" title={item?.name}>
                                        Name: {item?.name}
                                    </div>
                                    <div>Price: {item?.current_price}</div>
                                    <div>Currency: {currency}</div>
                                    <div>Last Updated: {moment(item?.last_updated).format("DD MMM YYYY HH:mm:ss")}</div>
                                    <div>Total Supply: {item?.total_supply}</div>
                                    <div>Max Supply: {item?.max_supply}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;
