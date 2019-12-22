import React from "react";
import ReactDOM from "react-dom";

class ContentFeed extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        }

    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {

        fetch(`http://192.168.1.205:8080/products`)
            .then(results => results.json())
            .then(results => this.setState((state) => ({items: [...state.items, results]} ) ) );


    }




    render() {
        return <div>
            {this.getItems()}
        </div>
    }


}


export default ContentFeed
