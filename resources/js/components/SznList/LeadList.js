import React, { Component } from 'react'
import LeadItem from './LeadItem'
import SearchControl from './SearchControl'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";

class LeadList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePage: 15,
            remoteData: null,
            leads: [],
            sznTable : {
                paginate: 10,
            }
        };

    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        axios.get('/api/v1/lead/list', {
            params: {
                paginate: this.state.sznTable.paginate
            }
        })
        .then(response => {
            this.setState({
                remoteData: response.data.message,
                leads: response.data.message.data
            });
            
            /* response.data.message.data.forEach(element => {
                sznTable.data.push(<LeadList/>);
            }); */
        })
        .catch((error) => {
            console.log(error);
        });
    };

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    DataTable() {
        return this.state.leads.map((lead, i) => {
            return <LeadItem obj={lead} key={i} />;
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">All Leads</h4>
                        <div className="pt-3 pb-3">
                            <div className="">
                                <div className="d-flex justify-content-between bd-highlight">
                                    <div className="d-flex flex-column flex-md-row">
                                        <div className="p-2   bd-highlight">
                                            <div className="">
                                                <DropdownButton
                                                    alignRight
                                                    title="Sort"
                                                    id="dropdown-menu-align-right"
                                                >
                                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </div>
                                        <div className="p-2  bd-highlight">
                                            <DropdownButton
                                                alignRight
                                                title="Show"
                                                variant="success"
                                                id="dropdown-menu-align-right"
                                            >
                                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                    <div className="p-2 flex-grow-1 bd-highlight"><SearchControl /></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='szn-list-wrapper p-3 bg-gradient-light'>
                             {this.DataTable()}
                        </div>
                        <div className="pt-3 pb-3">
                            <div className="">
                                

                                <div className="d-flex justify-content-center bd-highlight">
                                    <div className="p-2  bd-highlight">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={10}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            totalItemsCount={450}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LeadList