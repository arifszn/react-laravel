import React, {  useState, useEffect } from 'react'
import LeadItem from './LeadItem'
import SearchControl from './SearchControl'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";
import { useSelector, connect } from 'react-redux';
import setAuthUser from '../../redux/actions/index'


function LeadList(props) {
    const [leads, setLeads] = useState([]);

    //get reducer
    const authUser = useSelector(state => state.authUserReducer);

    //get authUser/reducer alternative
    //const authUser = props.authUserProp;
    
    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        axios.get('/api/v1/lead/list', {
            params: {
                api_token: authUser.api_token,
                paginate: 10
            }
        })
        .then(response => {
            setLeads(response.data.message.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        // setState({ activePage: pageNumber });
    }

    const dataTable = () => {
        return leads.map((lead, i) => {
            return <LeadItem obj={lead} key={i} />;
        });
    }

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
                            {dataTable()}
                    </div>
                    <div className="pt-3 pb-3">
                        <div className="">
                            

                            <div className="d-flex justify-content-center bd-highlight">
                                <div className="p-2  bd-highlight">
                                    <Pagination
                                        activePage={10}
                                        itemsCountPerPage={10}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        totalItemsCount={450}
                                        pageRangeDisplayed={5}
                                        onChange={handlePageChange}
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
    );
}


//redux state can be accessed as props in this component(Optional)
const mapStateToProps = (state) => {
	return {
		authUserProp: state.authUserReducer
	}
}

/**
 * redux state can be change by calling 'props.setAuthUserProp('demo user');' when 
 * applicable(Optional to )
 * 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserProp: (user) => dispatch(setAuthUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeadList)