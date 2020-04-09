import React, { Component } from 'react'

class SearchControl extends Component {
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
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchControl