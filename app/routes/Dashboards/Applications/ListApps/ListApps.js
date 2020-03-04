import React, {Component} from 'react';
import { ApplicationTable } from './components/ApplicationTable';

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
} from './../../../../components';

import { setupPage } from './../../../../components/Layout/setupPage';
import { HeaderMain } from "./../../../../components/HeaderMain";

class ListApps extends Component {

    render() {

        return (
            <Container>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <ApplicationTable/>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        )
    }
}

export default setupPage({
    pageTitle: 'Applications'
})(ListApps);