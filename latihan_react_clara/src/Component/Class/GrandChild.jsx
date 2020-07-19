import React, { Component } from 'react'

class GrandChild extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
    return (
        <div>
            <h3>GrandChild</h3>
            <p>{this.props.data}</p>
        </div>
    )

    }

        }

export default GrandChild