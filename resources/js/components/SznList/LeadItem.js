import React, { Component } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

class LeadItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="szn-portlet">
                    <div className="szn-portlet__body">
                        <div className="szn-widget szn-widget--user-profile-3">
                            <div className="szn-widget__top">
                                { true ? 
                                <div className="szn-widget__media szn-hidden-">
                                    <img src="/assets/images/faces/face1.jpg" alt="image" />
                                </div> :
                                <div
                                    className="szn-widget__pic szn-widget__pic--danger szn-font-danger szn-font-boldest szn-font-light ">
                                    {this.props.obj.name.split(' ').map(function(str) { return str ? str[0].toUpperCase() : "";}).join('')}
                                </div> }
                                <div className="szn-widget__content">
                                    <div className="szn-widget__head">
                                        <Link to={{
                                            pathname: `/lead/edit/${this.props.obj.id}`,
                                            state: {
                                                lead: this.props.obj
                                            }
                                        }} className="szn-widget__username">
                                            {this.props.obj.name}
                                            { this.props.obj.status == 0 ? <i className="mdi mdi-close-circle-outline szn-font-danger"></i> 
                                            : <i className="mdi mdi-checkbox-marked-circle szn-font-success"></i> }
                                        </Link>
                                        <div className="szn-widget__action">
                                            <Link to={{
                                                pathname: `/lead/edit/${this.props.obj.id}`,
                                                state: {
                                                    lead: this.props.obj
                                                }
                                            }} type="button" className="btn btn-outline-success btn-sm btn-upper">Edit</Link>&nbsp;
                                            <button type="button" className="btn btn-danger btn-sm btn-upper">Delete</button>
                                        </div>
                                    </div>
                                    <div className="szn-widget__subhead d-flex flex-column flex-md-row">
                                        <a href={void(0)}><i className="mdi mdi-email"></i>{this.props.obj.email}</a>
                                        <a href={void(0)}><i className="mdi mdi-phone"></i>{this.props.obj.phone} </a>
                                        { this.props.obj.address ? <a href={void(0)}><i className="mdi mdi-home"></i>{this.props.obj.address}</a> : '' }
                                    </div>
                                    <div className="szn-widget__info">
                                        <div className="szn-widget__desc">
                                            {this.props.obj.description} 
                                        </div>
                                        <div className="szn-widget__progress">
                                            <div className="szn-widget__text">
                                                Progress
                                            </div>
                                            <div className="progress" style={{ height: '5px', width: '100%' }}>
                                                <div className="progress-bar szn-bg-success" role="progressbar" style={{ width: this.props.obj.progress+'%' }}
                                                    aria-valuenow={this.props.obj.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="szn-widget__stats">
                                                {this.props.obj.progress}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="szn-widget__bottom d-flex flex-column flex-md-row">
                                <div className="szn-widget__item ">
                                    <div className="szn-widget__icon">
                                        <i className="mdi mdi-currency-usd"></i>
                                    </div>
                                    <div className="szn-widget__details d-flex flex-md-column flex-row">
                                        <span className="szn-widget__title">Earnings</span>
                                        <span className="szn-widget__value"><span>$</span>{this.props.obj.earnings}</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="mdi mdi-cart-outline"></i>
                                    </div>
                                    <div className="szn-widget__details d-flex flex-md-column flex-row">
                                        <span className="szn-widget__title">Expenses</span>
                                        <span className="szn-widget__value"><span>$</span>{this.props.obj.expenses}</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="mdi mdi-chart-arc"></i>
                                    </div>
                                    <div className="szn-widget__details d-flex flex-md-column flex-row">
                                        <span className="szn-widget__title">Net</span>
                                        <span className="szn-widget__value"><span>$</span>{this.props.obj.net}</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="mdi mdi-calendar"></i>
                                    </div>
                                    <div className="szn-widget__details d-flex flex-md-column flex-row">
                                        <span className="szn-widget__title">Added On</span>
                                        <span className="szn-widget__value">{moment(this.props.obj.created_at).fromNow()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LeadItem