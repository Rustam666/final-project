import React, {Component} from 'react';
const ClotheContext = React.createContext()



export default class ClotheProvider extends Component {
    state={

    }
    render() {
        return (
            <ClotheContext.Provider value-'hello'>
                {this.props.children}
            </ClotheContext.Provider>
        );
    }
}
const ClotheConsumer = ClotheContext.Consumer
 ClotheProvider;

export {ClotheProvider,}