import React, { useState } from 'react'

function TopControl(props) {
        
    return (
        <React.Fragment>
            <div className="pt-3 pb-3">
                <div className="d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Display</span>
                                </div>
                                <select className="form-control form-control-sm btn btn-primary" disabled={props.isLoading ? true : false} defaultValue={props.perPage} onChange={props.onChangePerPageHandle}>
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="500">500</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Sort By</span>
                                </div>
                                <select className="form-control form-control-sm btn btn-success" disabled={props.isLoading ? true : false} defaultValue={props.sortBy} onChange={props.onChangeSortByHandle}>
                                    <option value="created_at">Created</option>
                                    <option value="name">Name</option>
                                    <option value="email">email</option>
                                    <option value="progress">Progress</option>
                                    <option value="net">Net</option>
                                </select>
                                <div className="input-group-append">
                                    <button disabled={props.isLoading ? true : false} className="btn btn-sm btn-link" type="button" onClick={props.onClickSortTypeHandle}>
                                        { props.sortType == 'asc' ?  <i className="mdi mdi-arrow-down"></i> : <i className="mdi mdi-arrow-up"></i>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="p-2 col-md-4" onSubmit={props.onSubmitQueryHandle}>
                        <div className="input-group">
                            <input type="search" className="form-control form-control-sm" placeholder="Search Here" value={props.query} onChange={props.onChangeQueryHandle}/>
                            <div className="input-group-append">
                                <button className="btn btn-sm btn-gradient-primary" disabled={props.isLoading ? true : false} type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopControl