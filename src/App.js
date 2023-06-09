import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    console.log('CONSTRUCTOR');
    // this.state = {count: 0}
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=819&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80',
                id: 3
            }
        ]
    }
}

componentDidMount() {
    console.log('COMPONENT_DID_MOUNT');
}

componentDidUpdate(prevProps, prevState) {
    console.log('COMPONENT_DID_UPDATE');
    // console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // console.log('props', this.props);
    console.log('state', this.state);

    if(prevState.count === 0 && this.state.count === 1) {
        // actions
        this.setState({count: 100});
    }
}

handleClick = () => {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    });
}

componentWillUnmount() {
    // cleanup 
}

handleIncreaseQuantity = (product) => {
    console.log('Hey! Please increase the quantity of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        // products: products
        // or we can use shorthand because names are same for both
        products
    });
}

handleDecreaseQuantity = (product) => {
    console.log('Hey! Please deccrease the quantity of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0) {
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    });
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter(item => item.id !== id); // [{}]

    this.setState({
        products: items
    });
}

getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
        count += product.qty;
    });

    return count;
}

getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
        cartTotal += product.qty*product.price;
    });

    return cartTotal;
}

render() {
    console.log('RENDER');
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
    // return (
    //     <div className="App">
    //         {this.state.count}
    //         <button onClick={this.handleClick}>Inc count</button>
    //     </div>
    // );
  }
}

export default App;