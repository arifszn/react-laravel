import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import * as Helpers from '../Helpers'
import BeatLoader from 'react-spinners/BeatLoader'
import LoadingOverlay from 'react-loading-overlay';

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            loading: false
        }
        
        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            className: 'small text-danger',
            messages: {
                // email: 'That is not an email.',
            },
            validators: {
                customShortPassword: { // name the rule
                    message: 'The :attribute must be longer than 4', // give a message that will display when there is an error. :attribute will be replaced by the name you supply in calling it.
                    rule: function(val, params, validator) { // return true if it is succeeds and false it if fails validation.
                        if (val.length < 5) {
                            return false;
                        }
                        return true;
                    }
                },
                confirmPassword: {
                    message: 'The :attribute must be same be same as password', // give a message that will display when there is an error. :attribute will be replaced by the name you supply in calling it.
                    rule: function(val, params, validator) { // return true if it is succeeds and false it if fails validation.
                        if (val !== params[0]) {
                            return false;
                        }
                        return true;
                    }
                }
            }
        });
    }

    componentDidMount() {
        document.title = 'Registration';
    }

    onChangeHandle = (e) =>{
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    onSubmitHandle = (e) =>{
        e.preventDefault();
        
        if (this.validator.allValid()) {
            this.setState({
                loading: true
            });
            axios.post('/registration', $(e.target).serialize())
            .then(response => {
                this.setState({
                    loading: false
                });
                if (response.data.status == 'validation-error') {
                    var errorArray = response.data.message;
                    $.each( errorArray, function( key, errors ) {
                        $.each( errors, function( key, errorMessage ) {
                            Helpers.showSznNotification({
                                type : 'error',
                                message : errorMessage
                            });
                        });
                    });
                } else if (response.data.status == 'error') {
                        Helpers.showSznNotification({
                            type : 'error',
                            message : response.data.message
                        });
                } else if (response.data.status == 'success') {
                    
                   window.location = "/home";
                }
            })
            .catch((error) => {
                this.setState({
                    loading: false
                });
                if (error.response.data.status == 'validation-error') {
                    var errorArray = error.response.data.message;
                    $.each( errorArray, function( key, errors ) {
                        $.each( errors, function( key, errorMessage ) {
                            Helpers.showSznNotification({
                                type : 'error',
                                message : errorMessage
                            });
                        });
                    });
                } else if (error.response.data.status == 'error') {
                    Helpers.showSznNotification({
                        type : 'error',
                        message : error.response.data.message
                    });
                } 
                
            });
        } else {
            this.validator.showMessages();
        }

    }


    render() {
        return (
            <React.Fragment>
                <LoadingOverlay
                    active={this.state.loading}
                    spinner={<BeatLoader />}
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            opacity: '0.5',
                            filter: 'alpha(opacity=50)',
                            background: 'white'
                        })
                    }}
                >
                    <div className="auth-form-light text-left p-5 animated fadeIn">
                        <div className="brand-logo">
                            <h1 className="text-center" style={{color: '#da8cff'}}>{global.variables.site_name}</h1>
                        </div>
                        <h4>New here?</h4>
                        <form className="pt-3" ref={c => { this.form = c }} onSubmit={this.onSubmitHandle}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="name" id="name" placeholder="Full Name" value={this.state.name} onChange={this.onChangeHandle}/>
                                {this.validator.message('full name', this.state.name, 'required', {
                                    className: 'small text-danger custom-class'
                                })}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeHandle}/>
                                {this.validator.message('email', this.state.email, 'required|email')}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandle}/>
                                {this.validator.message('password', this.state.password, 'required|customShortPassword')}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.onChangeHandle}/>
                                {this.validator.message('confirm password', this.state.password_confirmation, 'required|confirmPassword:'+this.state.password)}
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                            </div>
                            <div className="text-center mt-4 font-weight-light"> Already have an account? <Link to='/login' className="text-primary">Login</Link>
                            </div>
                        </form>
                    </div>
                </LoadingOverlay>
            </React.Fragment>
        )
    }
}

export default Registration