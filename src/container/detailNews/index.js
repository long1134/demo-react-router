import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class DetailNews extends Component {
    render() {
        console.log(this.props.location.data)
        const text = this.props.location.data ? this.props.location.data.name : "No data"
        return (
            <div>
                <p>{text}</p>
                <NavLink activeStyle={{ backgroundColor: 'black', color: "red" }} to={{ pathname: "/" }}>Back to home</NavLink>
            </div>
        )
    }
}
