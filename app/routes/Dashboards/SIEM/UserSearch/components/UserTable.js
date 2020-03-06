import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import  { Redirect } from 'react-router-dom'
import { GetAuthHeader } from '../../../../../components/Authentication/auth'

import {
    Button,
    ButtonGroup,
    Pagination,
    PaginationItem,
    PaginationLink
} from '../../../../../components';


export class UserTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageData: {users:[], totalPages: 1},
            page: 1
        }

        this.rowEvent = {
            onClick: (e, row, rowIndex) => {
                this.setState({id: row.id});
            }
        };

    }

    async getUserPage(page){

        const headerList = GetAuthHeader();

        await fetch(process.env.REACT_APP_LW_API + '/siem/list?pageSize=10&page=' + page, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: headerList
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({pageData : data});
        });

    }
    

    async componentWillMount() {
        this.getUserPage(this.state.page);
    }

    createColumnDefinitions() {
        return [
            {
                dataField: 'username',
                text: 'Username'
            }
        ]; 
    }

    changePage(event, newPage){
        console.log(event)
    }

    render() {      

        if(this.state.id){
            return <Redirect to={{
                pathname: '/siem/overview',
                state: { id: this.state.id }
            }}/>
        }

        const columnDefs = this.createColumnDefinitions();

        let pages = [];
        _.times(this.state.pageData.totalPages, (i) => {
            if(i+1 == this.state.page){
                pages.push(<PaginationItem active><PaginationLink>{i+1}</PaginationLink></PaginationItem>);
            } else {
                pages.push(<PaginationItem onClick={(e) => this.changePage(e)}><PaginationLink>{i+1}</PaginationLink></PaginationItem>);
            }
        })

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.pageData.users }
                columns={ columnDefs }
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <div className="d-flex ml-auto">
                                
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
                        <div className="d-flex align-items-center mb-2">
                            <div className="d-flex ml-auto">
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous>Previous</PaginationLink>
                                    </PaginationItem>
                                    {pages}
                                    <PaginationItem>
                                        <PaginationLink previous href="#">Next</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );

    }

}