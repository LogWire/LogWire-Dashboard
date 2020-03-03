import React, {Component} from 'react';

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
import { HeaderMain } from "./../../../components/HeaderMain";

const GetStatus = function (component) {

    fetch(process.env.REACT_APP_LW_API + '/status/system')
    .then(results => {
        return results.json();
    }).then(data => {
        if(!data.isOk){
            if(data.message.startsWith('[WARN]')){
                component.setState({ systemStatus: {error_type: "Warn", error_message: data.message.replace('[WARN] ',''), badgeColor: "warning"}})
            } else if(data.message.startsWith('[ERROR]')){
                component.setState({ systemStatus: {error_type: "Error", error_message: data.message.replace('[ERROR] ',''), badgeColor: "danger"}})
            } else {
                component.setState({ systemStatus: {error_type: "Unknown", error_message: "", badgeColor: "warning"}})
            }
        } else {
            component.setState({ systemStatus: {error_type: "Ok", error_message: "", badgeColor: "success"}})
        }
    }).catch(error => {
        component.setState({ systemStatus: {error_type: "Unknown", error_message: "", badgeColor: "warning"}})
    });
    
}

class Home extends Component {

    constructor(props) {
        
      super(props);

      this.state = {
        systemStatus: {error_type: "Unknown", error_message: "", badgeColor: "warning"}
      } 

    }
    
    componentWillMount() {

        GetStatus(this);
        this.interval = setInterval(() => GetStatus(this), 10000);

    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {

        return (
            <Container>
                <Row className="mb-2">
                    <Col lg={ 12 }>
                        <HeaderMain 
                            title="Home"
                            className="mb-4 mb-lg-5"
                        />
                    </Col>
                </Row>
                <Row>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                System Status <Badge color={this.state.systemStatus.badgeColor}>{this.state.systemStatus.error_type}</Badge>
                            </CardTitle>
                            <p className="card-text">
                                 {/* <Badge color="success">Ok</Badge> Kube Status <br/>
                                 <Badge color="success">Ok</Badge> Cluster Status<br/>
                                 <Badge color="warning">Warning</Badge> Ingress Status<br/>
                                 <Badge color="success">Ok</Badge> Controller Status<br/> */}
                            </p>                            
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )

    }

}

export default setupPage({
    pageTitle: 'Home'
})(Home);