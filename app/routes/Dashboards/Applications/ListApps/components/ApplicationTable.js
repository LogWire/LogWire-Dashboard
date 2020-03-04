import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import  { Redirect } from 'react-router-dom'

import {
    Button,
    ButtonGroup
} from '../../../../../components';

const generateRow = (id) => ({
    id,
    applicationName: 'Test'
});

export class ApplicationTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            addRedirect : false
        }
    }

    handleAddRow() {

        this.setState({
            addRedirect: true
        })
        
    }

    createColumnDefinitions() {
        return [
            {
                dataField: 'applicationName',
                text: 'Application Name'
            }
        ]; 
    }

    render() {

        if(this.state.addRedirect){
            return <Redirect to='/applications/add'  />
        }

        const columnDefs = this.createColumnDefinitions();

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.users }
                columns={ columnDefs }
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <div className="d-flex ml-auto">
                                <ButtonGroup>
                                    <Button size="sm" outline onClick={this.handleAddRow.bind(this)}>
                                        Add <i className="fa fa-fw fa-plus"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <BootstrapTable
                            classes="table-responsive-lg"
                            bordered={ false }
                            responsive
                            hover
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );

    }

}