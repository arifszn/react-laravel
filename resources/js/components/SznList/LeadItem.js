import React, { Component } from 'react'

class LeadItem extends Component {
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
                <div className="szn-portlet">
                    <div className="szn-portlet__body">
                        <div className="szn-widget szn-widget--user-profile-3">
                            <div className="szn-widget__top">
                                <div className="szn-widget__media szn-hidden-">
                                    <img src="/assets/images/faces/face1.jpg" alt="image" />
                                </div>
                                <div
                                    className="szn-widget__pic szn-widget__pic--danger szn-font-danger szn-font-boldest szn-font-light szn-hidden">
                                    JM
                                </div>
                                <div className="szn-widget__content">
                                    <div className="szn-widget__head">
                                        <a href="#" className="szn-widget__username">
                                            Jason Muller
                                            <i className="flaticon2-correct szn-font-success"></i>
                                        </a>
                                        <div className="szn-widget__action">
                                            <button type="button" className="btn btn-outline-success btn-sm btn-upper">ASK</button>&nbsp;
                                            <button type="button" className="btn btn-facebook btn-sm btn-upper">HIRE</button>
                                        </div>
                                    </div>
                                    <div className="szn-widget__subhead">
                                        <a href="#"><i className="flaticon2-new-email"></i>jason@siastudio.com</a>
                                        <a href="#"><i className="flaticon2-calendar-3"></i>PR Manager </a>
                                        <a href="#"><i className="flaticon2-placeholder"></i>Melbourne</a>
                                    </div>
                                    <div className="szn-widget__info">
                                        <div className="szn-widget__desc">
                                            I distinguish three main text objektive could be merely to inform people.
                                            <br /> A second could be persuade people.You want people to bay objective
                                        </div>
                                        <div className="szn-widget__progress">
                                            <div className="szn-widget__text">
                                                Progress
                                            </div>
                                            <div className="progress" style={{ height: '5px', width: '100%' }}>
                                                <div className="progress-bar szn-bg-success" role="progressbar" style={{ width: '65%' }}
                                                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="szn-widget__stats">
                                                78%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="szn-widget__bottom">
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>
                                    <div className="szn-widget__details">
                                        <span className="szn-widget__title">Earnings</span>
                                        <span className="szn-widget__value"><span>$</span>249,500</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-confetti"></i>
                                    </div>
                                    <div className="szn-widget__details">
                                        <span className="szn-widget__title">Expenses</span>
                                        <span className="szn-widget__value"><span>$</span>164,700</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-pie-chart"></i>
                                    </div>
                                    <div className="szn-widget__details">
                                        <span className="szn-widget__title">Net</span>
                                        <span className="szn-widget__value"><span>$</span>782,300</span>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-file-2"></i>
                                    </div>
                                    <div className="szn-widget__details">
                                        <span className="szn-widget__title">73 Tasks</span>
                                        <a href="#" className="szn-widget__value szn-font-brand">View</a>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-chat-1"></i>
                                    </div>
                                    <div className="szn-widget__details">
                                        <span className="szn-widget__title">648 Comments</span>
                                        <a href="#" className="szn-widget__value szn-font-brand">View</a>
                                    </div>
                                </div>
                                <div className="szn-widget__item">
                                    <div className="szn-widget__icon">
                                        <i className="flaticon-network"></i>
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