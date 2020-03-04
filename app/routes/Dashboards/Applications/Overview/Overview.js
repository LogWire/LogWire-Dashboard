import React, {Component} from 'react';
import { GetAuthHeader } from '../../../../components/Authentication/auth'

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    FormFeedback,
    Badge,
    Button,
    CustomInput,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from './../../../../components';

import { setupPage } from './../../../../components/Layout/setupPage';
import { HeaderMain } from "./../../../../components/HeaderMain";

class AppOverview extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Name: ""
        };
    }

    render() {

        return (
            <Container>
                <Row className="mb-2">
                    <Col lg={ 12 }>
                        <HeaderMain 
                            title={"Application Overview - " + this.props.location.state.id}
                            className="mb-4 mb-lg-5"
                        />
                    </Col>
                </Row>
            </Container>
        )

    }

}

export default setupPage({
    pageTitle: 'Application Overview'
})(AppOverview);