import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';
import * as Helpers from '../Helpers'
import LoadingOverlay from 'react-loading-overlay';
import BeatLoader from 'react-spinners/BeatLoader'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'demo@example.com',
            password: '12345',
            loading: false
        }

        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            className: 'small text-danger mdi mdi-alert'
        });
    }

    componentDidMount() {
        document.title = 'Login';
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
            axios.post('/login', $(e.target).serialize())
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
                    //save api token
                    //to do
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
                        <h4>Hello! let's get started</h4>
                        <form className="pt-3" ref={c => { this.form = c }} onSubmit={this.onSubmitHandle}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeHandle}/>
                                {this.validator.message('email', this.state.email, 'required|email')}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandle}/>
                                {this.validator.message('password', this.state.password, 'required|min:5')}
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >
                                    SIGN IN
                                </button>
                            </div>

                            <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to='/registration' className="text-primary">Create</Link >
                            </div>
                        </form>
                    </div>
                    </LoadingOverlay>
            </React.Fragment>
        )
    }
}

export default Login