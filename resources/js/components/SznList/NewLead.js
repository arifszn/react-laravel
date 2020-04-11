import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux';
import rootAction from '../../redux/actions/index'

function NewList(props) {
    const [leads, setLeads] = useState([]);

    //get authUser
    const authUser = props.authUserProp;
    
    useEffect(() => {
        props.setActiveComponentProp('NewLead');
    }, []);

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    NEW LEAD HERE   
                    
                </div>
            </div>
        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
	return {
		authUserProp: state.authUserReducer,
		activeComponentProp: state.activeComponentReducer,
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserProp: (user) => dispatch(setAuthUser(user)),
        setActiveComponentProp: (component) => dispatch(rootAction.setActiveComponent(component))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewList)