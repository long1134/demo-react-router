import React, { Component } from 'react'
import Item from "../components/Item"

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Nam Nguyen"
                },
                {
                    id: 2,
                    name: "Cuong Do"
                }
            ],
        }
    }

    getDataDetail = (item) => {
        console.log(item)
    }
    render() {
        return (
            <div>
                <Item data={this.state.data} getData={this.getDataDetail} />
            </div>
        )
    }
}
