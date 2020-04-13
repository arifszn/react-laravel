import React, {  useState, useEffect } from 'react'
import LeadItem from './LeadItem'
import Pagination from "react-js-pagination";
import { useSelector, connect } from 'react-redux';
import rootAction from '../../redux/actions/index'
import ContentLoader from "react-content-loader" 
import { fadeIn } from 'animate.css'
import { showSznNotification} from '../../Helpers'
import TopControl from './TopControl'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function LeadList(props) {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [state, setState] = useState({
       pageRangeDisplayed: 5,
       currentPage: 1, 
       total: 0,
       lastPageUrl: null,
       nextPageUrl: null,
       firstPageUrl: null,
       prevPageUrl: null,
       perPage: 10,
       query: '',
       sortBy: 'created_at',
       sortType: 'desc'
    });

    //get reducer
    const authUser = useSelector(state => state.authUserReducer);

    //get authUser/reducer alternative
    //const authUser = props.authUserProp;
    
    useEffect(() => {
        document.title = 'All Leads';

        props.setActiveComponentProp('LeadList');

    }, []);

    useEffect(() => {
        loadData();
        
    }, [state.currentPage, state.perPage, state.sortBy, state.sortType]);

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
        axios.get('/api/v1/lead/list?page='+state.currentPage, {
            params: {
                api_token: authUser.api_token,
                per_page: state.perPage,
                query: state.query,
                sort_by: state.sortBy,
                sort_type: state.sortType
            }
        })
        .then(response => {
            setIsLoading(false);
            setLeads(response.data.message.data);
            setState({
                ...state,
                currentPage: response.data.message.current_page,
                firstPageUrl: response.data.message.first_page_url,
                lastPageUrl: response.data.message.last_page_url,
                nextPageUrl: response.data.message.next_page_url,
                prevPageUrl: response.data.message.prev_page_url,
                perPage: parseInt(response.data.message.per_page),
                total: response.data.message.total,
            })
        })
        .catch((error) => {
            showSznNotification({
                type : 'error',
                message : error.response.data.message
            });
        });
    };

    const handlePageChange = (pageNumber) => {
        setState({
            ...state,
            currentPage: pageNumber 
        });
    }

    const onChangeQueryHandle = (e) => {
        setState({
            ...state,
            query: e.target.value
        });
    };

    const onChangePerPageHandle = (e) => {
        setState({
            ...state,
            perPage: parseInt(e.target.value)
        });
    };

    const onChangeSortByHandle = (e) => {
        setState({
            ...state,
            sortBy: e.target.value
        });
    };

    const onClickDeleteHandler = (id) => {

        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                label: 'Yes',
                    onClick: () => {
                        setIsLoading(true);

                        axios.post('/api/v1/lead/destroy', {
                            api_token: authUser.api_token,
                            lead_id: id
                        })
                        .then(response => {
                            setIsLoading(false);
                            if (response.data.status == 'error') {
                                    showSznNotification({
                                        type : 'error',
                                        message : response.data.message
                                    });
                            } else if (response.data.status == 'success') {
                                showSznNotification({
                                    type : 'success',
                                    message : response.data.message
                                });
                                loadData();
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            
                            setIsLoading(false);

                            if (error.response.data.status == 'error') {
                                showSznNotification({
                                    type : 'error',
                                    message : error.response.data.message
                                });
                            } 
                        });
                    }
                },
                {
                label: 'No',
                    //do nothing
                }
            ]
        });
    };

    const onClickSortTypeHandle = (e) => {
        if (state.sortType == 'asc') {
            setState({
                ...state,
                sortType: 'desc'
            });
        } else {
            setState({
                ...state,
                sortType: 'asc'
            });
        }
        
    };
    
    const onSubmitQueryHandle = (e) => {
        e.preventDefault();
        loadData();

    };

    const dataTable = () => {
        return isLoading ? skeletonLoader() : 
        (leads.length == 0 ? <div className="text-center text-gray">
                                <div className="p-3 font-weight-bold">No Data Available</div>
                            </div> : 
        leads.map((lead, i) => {
            return <LeadItem onClickDeleteHandler={onClickDeleteHandler} obj={lead} key={i} />;
        }));
    }

    return (
        <React.Fragment>
            <div className="card animated fadeIn">
                <div className="card-body">
                    <TopControl 
                        isLoading={isLoading} 
                        perPage={state.perPage} 
                        onChangePerPageHandle={onChangePerPageHandle}
                        sortBy={state.sortBy}
                        sortType={state.sortType}
                        onChangeSortByHandle={onChangeSortByHandle}
                        onClickSortTypeHandle={onClickSortTypeHandle}
                        onSubmitQueryHandle={onSubmitQueryHandle}
                        onChangeQueryHandle={onChangeQueryHandle}
                        query={state.query}
                    />
                    <div className='szn-list-wrapper bg-gradient-light'>
                            {dataTable()}
                    </div>
                    <div className="pt-3 pb-3">
                        <div className="">
                            

                            <div className="d-flex justify-content-center">
                                <div className="p-2">
                                    <Pagination
                                        activePage={state.currentPage}
                                        itemsCountPerPage={state.perPage}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        totalItemsCount={state.total}
                                        pageRangeDisplayed={state.pageRangeDisplayed}
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