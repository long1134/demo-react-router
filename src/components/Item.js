import React, { Component } from 'react'
import Prototypes from "prop-types"
import { Link } from "react-router-dom"

export default class Item extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }

    showItem(items) {
        return items.map((item, index) => (
            <li key={item.id}>
                <div onClick={e => this.props.getData(item)}>
                    <p>{index}- {item.id}</p>
                    <p>{item.name}</p>
                    <Link to={{ pathname: `detail/${item.id}`, data: item, search: `?id=${item.id}` }}>View detail</Link>
                </div>
            </li>
        ))
    }
    componentWillMount() {
        console.log("Will mount")
    }
    componentDidMount() {
        console.log("Did mount")
    }
    componentWillReceiveProps() {
        console.log("will receive prop")
    }
    shouldComponentUpdate() {
        console.log("should update")
        return true
    }
    componentWillUpdate() {
        console.log("will update")
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.showItem(this.props.data)}
                </ul>
            </div>
        )
    }
}

Item.propTypes = {
    data: Prototypes.arrayOf(Prototypes.shape({
        id: Prototypes.number,
        name: Prototypes.string
    }))
}