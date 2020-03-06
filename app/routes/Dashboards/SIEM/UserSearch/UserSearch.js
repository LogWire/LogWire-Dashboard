import React, {Component} from 'react';
import { UserTable } from './components/UserTable';

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

class UserSearch extends Component {

    constructor(props) {
        
      super(props);

      this.state = {} 

    }

    render() {

        return (
            <Container>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <UserTable/>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        )

    }

}

export default setupPage({
    pageTitle: 'User Reports'
})(UserSearch);