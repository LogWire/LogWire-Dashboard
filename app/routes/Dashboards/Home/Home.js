import React from 'react';

import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Progress,
    Col
} from './../../../components';


import { setupPage } from './../../../components/Layout/setupPage';
import { HeaderMain } from "../../components/HeaderMain";

const Home = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Home"
                    className="mb-4 mb-lg-5"
                />

            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Home'
})(Home);