import React, {Component} from 'react';
import items from "../../redux/shop/shop.data"
const ClotheContext = React.createContext()



class ClotheProvider extends Component {
    state={
        products:[],
        sortedProducts:[],
        bestSellers:[],
        loading:true

    };
    //getData
    componentDidMount() {
        let products = this.formatData(items);
console.log('mydata23-',items)
    }
formatData(items){
       /* let tempItems = items.map(items=>{

         /!*   let id=item.hats.id;
            let images= item.items.imageUrl
            let products= {...item.items,images,id};
            return products
*!/
        });
        return tempItems*/
}

    render() {
        console.log('mydata-',items)
        return (
            <ClotheContext.Provider value={{...this.state}}>
                {this.props.children}
            </ClotheContext.Provider>
        );
    }
}
const ClotheConsumer = ClotheContext.Consumer

export {ClotheProvider,ClotheConsumer,ClotheContext}