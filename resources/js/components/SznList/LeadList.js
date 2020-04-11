import React, {  useState, useEffect } from 'react'
import LeadItem from './LeadItem'
import SearchControl from './SearchControl'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";
import { useSelector, connect } from 'react-redux';
import rootAction from '../../redux/actions/index'
import ContentLoader from "react-content-loader" 
import { fadeIn } from 'animate.css'

function LeadList(props) {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //get reducer
    const authUser = useSelector(state => state.authUserReducer);

    //get authUser/reducer alternative
    //const authUser = props.authUserProp;
    
    useEffect(() => {
        document.title = 'All Leads';

        props.setActiveComponentProp('LeadList');
        loadData();
    }, []);

    const skeletonLoader = () => {
        return <ContentLoader 
                    speed={2}
                    viewBox="0 0 945 500"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#dad8d8"
                >
                    <rect x="33" y="36" rx="0" ry="0" width="92" height="90" /> 
                    <rect x="144" y="41" rx="0" ry="0" width="196" height="15" /> 
                    <rect x="144" y="69" rx="0" ry="0" width="353" height="12" /> 
                    <rect x="143" y="92" rx="0" ry="0" width="399" height="18" /> 
                    <rect x="143" y="116" rx="0" ry="0" width="51" height="14" /> 
                    <rect x="205" y="118" rx="0" ry="0" width="298" height="12" /> 
                    <rect x="517" y="116" rx="0" ry="0" width="26" height="15" /> 
                    <rect x="0" y="10" rx="0" ry="0" width="13" height="487" /> 
                    <rect x="-29" y="2" rx="0" ry="0" width="1001" height="11" /> 
                    <rect x="930" y="7" rx="0" ry="0" width="66" height="490" /> 
                    <rect x="6" y="358" rx="0" ry="0" width="2" height="15" /> 
                    <rect x="5" y="484" rx="0" ry="0" width="935" height="13" /> 
                    <rect x="797" y="32" rx="0" ry="0" width="44" height="28" /> 
                    <rect x="854" y="32" rx="0" ry="0" width="56" height="28" /> 
                    <rect x="43" y="186" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="255" y="186" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="476" y="185" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="693" y="184" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="7" y="242" rx="0" ry="0" width="952" height="17" /> 
                    <rect x="33" y="281" rx="0" ry="0" width="92" height="90" /> 
                    <rect x="144" y="286" rx="0" ry="0" width="196" height="15" /> 
                    <rect x="144" y="314" rx="0" ry="0" width="353" height="12" /> 
                    <rect x="143" y="337" rx="0" ry="0" width="399" height="18" /> 
                    <rect x="143" y="361" rx="0" ry="0" width="51" height="14" /> 
                    <rect x="205" y="363" rx="0" ry="0" width="298" height="12" /> 
                    <rect x="517" y="361" rx="0" ry="0" width="26" height="15" /> 
                    <rect x="797" y="277" rx="0" ry="0" width="44" height="28" /> 
                    <rect x="854" y="277" rx="0" ry="0" width="56" height="29" /> 
                    <rect x="43" y="431" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="255" y="431" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="476" y="430" rx="0" ry="0" width="100" height="47" /> 
                    <rect x="693" y="429" rx="0" ry="0" width="100" height="47" />
                </ContentLoader>
    };


    const loadData = () => {
        axios.get('/api/v1/lead/list', {
            params: {
                api_token: authUser.api_token,
                paginate: 10
            }
        })
        .then(response => {
            setIsLoading(false);
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
        return isLoading ? skeletonLoader() : 
        (leads.length == 0 ? <div className=""><div className="p-3 font-weight-bold">No Data Available</div></div> : leads.map((lead, i) => {
            return <LeadItem obj={lead} key={i} />;
        }));
    }

    return (
        <React.Fragment>
            <div className="card animated fadeIn">
                <div className="card-body">
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
		authUserProp: state.authUserReducer,
		activeComponentProp: state.activeComponentReducer,
	}
}

/**
 * redux state can be change by calling 'props.setAuthUserProp('demo user');' when 
 * applicable(Optional to )
 * 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserProp: (user) => dispatch(rootAction.setAuthUser(user)),
        setActiveComponentProp: (component) => dispatch(rootAction.setActiveComponent(component))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeadList)