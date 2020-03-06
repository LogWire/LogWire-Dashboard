import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import  { Redirect } from 'react-router-dom'
import { GetAuthHeader } from '../../../../../components/Authentication/auth'

import {
    Button,
    ButtonGroup
} from '../../../../../components';

export class ApplicationTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            applications: [],
            addRedirect : false
        }

        this.rowEvent = {
            onClick: (e, row, rowIndex) => {
                this.setState({id: row.id});
            }
        };

    }

    async componentWillMount() {
        this.GetAppicationsList();
    }

    handleAddRow() {

        this.setState({
            addRedirect: true
        })
        
    }

    createColumnDefinitions() {
        return [
            {
                dataField: 'name',
                text: 'Application Name'
            }
        ]; 
    }

    async GetAppicationsList () {

        const headerList = GetAuthHeader();
    
        await fetch(process.env.REACT_APP_LW_API + '/application/list', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: headerList
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState(data);
        });
    
    }

    render() {      

        if(this.state.addRedirect){
            return <Redirect to='/applications/add'/>
        }

        if(this.state.id){
            return <Redirect to={{
                pathname: '/applications/overview',
                state: { id: this.state.id }
            }}/>
        }

        const columnDefs = this.createColumnDefinitions();

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.applications }
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
                            rowEvents={this.rowEvent}
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );

    }

}