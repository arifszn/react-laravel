import React, { useState, useEffect, useRef } from 'react'
import { useSelector, connect } from 'react-redux';
import rootAction from '../../redux/actions/index'
import { fadeIn } from 'animate.css'
import BeatLoader from 'react-spinners/BeatLoader'
import { showSznNotification} from '../../Helpers'
import LoadingOverlay from 'react-loading-overlay';
import SimpleReactValidator from 'simple-react-validator';
import { Link } from 'react-router-dom';

function NewLead(props) {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        progress: 0,
        description: '',
        status: 1,
        earnings: 0.00,
        expenses: 0.00,
        net: 0.00,
        loading: false,
    });
    //get authUser
    const authUser = props.authUserProp;

    //validator
    const [, forceUpdate] = useState() //this is a dummy state, when form submitted, change the state so that message is rendered
    const simpleValidator = useRef(new SimpleReactValidator({
            autoForceUpdate: {forceUpdate: forceUpdate},
            className: 'small text-danger mdi mdi-alert pt-1 pl-1'
    }));

    useEffect(() => {
        document.title = 'New Lead';

        props.setActiveComponentProp('NewLead');
    }, []);

    const onChangeHandle = (e) =>{
        const { name, value } = e.target;
        setState({
            ...state,
            [name] : value
        });
    }

    const onSubmitHandle = (e) =>{
        e.preventDefault();
        
        if (simpleValidator.current.allValid()) {
            
        } else {
            simpleValidator.current.showMessages();
            console.log(simpleValidator.current);
            forceUpdate(1)
        }

    }

    return (
        <React.Fragment>
            <div className="card animated fadeIn">
                <div className="card-body">
                    <div className="row p-5 d-flex justify-content-center">
                        <div className="col-md-8 ">
                            <form className="forms-sample p-5 border" onSubmit={onSubmitHandle}>
                                <div className="form-group">
                                    <ul className="nav nav-tabs nav-pills c--nav-pills nav-justified">
                                        <li className="nav-item">
                                            <span className="nav-link btn btn-info btn-block active">NEW LEAD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-account"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="name" name="name" placeholder="Name" 
                                        value={state.name} onChange={onChangeHandle}/>
                                    </div>
                                    {simpleValidator.current.message('name', state.name, 'required')}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-email"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="email" name="email" placeholder="Email" value={state.email} onChange={onChangeHandle}/>
                                    </div>
                                    {simpleValidator.current.message('email', state.email, 'required|email')}
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-phone"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="phone" name="phone" placeholder="Phone" value={state.phone} onChange={onChangeHandle}/>
                                    </div>
                                    {simpleValidator.current.message('phone', state.phone, 'required|phone')}
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-home"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="address" name="address" placeholder="Address" value={state.address} onChange={onChangeHandle}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-pencil"></i>
                                            </span>
                                        </div>
                                        <textarea className="form-control form-control-sm" id="description" name="description" placeholder="Description" value={state.description} onChange={onChangeHandle}></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <hr />
                                </div>
                                <div className="form-group">
                                    <label>Progress</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-phone"></i>
                                            </span>
                                        </div>
                                        <input type="range" min="0" max="100" className="custom-range form-control form-control-sm" id="progress" name="progress" value={state.progress} onChange={onChangeHandle}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Earnings</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-currency-usd"></i>
                                            </span>
                                        </div>
                                        <input type="number" className="form-control form-control-sm" id="earnings" name="earnings" placeholder="Earnings" value={state.earnings} onChange={onChangeHandle}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Expenses</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-cart-outline"></i>
                                            </span>
                                        </div>
                                        <input type="number" className="form-control form-control-sm" id="expenses" name="expenses" placeholder="Expenses"value={state.expenses} onChange={onChangeHandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Net</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-chart-arc"></i>
                                            </span>
                                        </div>
                                        <input type="number" className="form-control form-control-sm" id="net" name="net" placeholder="Net"value={state.net} onChange={onChangeHandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-gradient-success text-white">
                                                <i className="mdi mdi-clipboard-alert"></i>
                                            </span>
                                        </div>
                                        <select className="form-control form-control-sm" id="status" name="status" value={state.status} onChange={onChangeHandle}>
                                            <option value="1">Active</option>
                                            <option value="0" >Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-gradient-primary btn-md mr-2">Submit</button>
                                    <Link to='/lead/list' className="btn btn-inverse-secondary btn-md">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewLead)