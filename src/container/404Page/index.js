import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class ErrorPage extends Component {
    render() {
        return (
            <div>
                <p>Error</p>
                <Link to={{ pathname: "/" }}>Back home</Link>
            </div>
        )
    }
}
