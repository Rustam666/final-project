import React, {Component} from 'react';
import {ClotheContext} from "./database";


class NewShop extends Component {
    static contextType = ClotheContext
    render() {
        const {greeting} = this.context

        return (
            <div>

            </div>
        );
    }
}

export default NewShop;