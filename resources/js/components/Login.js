import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fadeIn } from 'animate.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
    }

    componentDidMount() {
        document.title = 'Login';
    }

    render() {
        return (
            <div className="auth-form-light text-left p-5 animated fadeIn">
                <div className="brand-logo">
                    <h1 className="text-center" style={{color: '#da8cff'}}>{global.variables.site_name}</h1>
                </div>
                <h4>Hello! let's get started</h4>
                <form className="pt-3">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mt-3">
                        <a className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="#">
                            SIGN IN
                        </a>
                    </div>

                    <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to='/user/registration' className="text-primary">Create</Link >
                    </div>
                </form>
            </div>
        )
    }
}

export default Login