import React, { Component } from 'react'
import LeadItem from './LeadItem'
import SearchControl from './SearchControl'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class LeadList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">All Leads</h4>
                        <div className="pt-3 pb-3">
                            <div className="">
                                <div class="d-flex justify-content-between bd-highlight">
                                    <div class="p-2  bd-highlight">
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
                                    <div class="p-2 flex-grow-1 bd-highlight"><SearchControl /></div>
                                    <div class="p-2   bd-highlight">
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
                                    
                                </div>


                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='szn-list-wrapper p-3 bg-gradient-light'>
                            <LeadItem />
                            <LeadItem />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LeadList