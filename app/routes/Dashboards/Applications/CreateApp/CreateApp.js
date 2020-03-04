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

const AddApplication = (event, component) => {
    event.preventDefault();

    const headerList = GetAuthHeader();
    headerList.append('Content-Type', 'application/json');
    
    console.log(component.state)

    fetch(process.env.REACT_APP_LW_API + '/application/', {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: headerList,
        body: JSON.stringify(component.state)
    }).then(results => {
        return results.json();
    }).then(data => {
        component.props.history.push('/applications');
    });


}

class CreateApp extends Component {

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
                            title="Create Application"
                            className="mb-4 mb-lg-5"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 12 }>
                        <Card className="mb-3">
                            <CardBody>
                                <Form className="mb-3" onSubmit={(e)=> AddApplication(e, this)}>
                                    <FormGroup row>
                                        <Label for="name" sm={3}>
                                            Name
                                        </Label>
                                        <Col sm={9}>
                                            <Input 
                                                type="" 
                                                name="" 
                                                id="name" 
                                                placeholder=""
                                                value={this.state.name} 
                                                onChange={e => this.setState({Name: e.target.value})}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <br/>
                                    <Button color="primary" block>
                                        Add Application
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )

    }

}

export default setupPage({
    pageTitle: 'Create Application'
})(CreateApp);