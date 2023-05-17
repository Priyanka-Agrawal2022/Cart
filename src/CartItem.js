import React from "react";

const CartItem = (props) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }

    //     this.increaseQuantity = this.increaseQuantity.bind(this);
    //     this.testing();
    // }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         // setState acts like a synchronous call
    //         this.setState({ qty: 100} );
    //         console.log('state', this.state);
    //     });
    // }

    // arrow function automatically binds the value of this to the instance of class
    // increaseQuantity = () => {
    //     // setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // }, () => {
    //     //     console.log('this.state:', this.state);
    //     // });

    //     // setState form 2 - use this if prevState required
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log('this.state:', this.state);
    //     });
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;

    //     if (qty === 0) {
    //         return;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     }, () => {
    //         console.log('this.state:', this.state);
    //     });
    // }

    // const {price, title, qty} = this.state;
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={product.img} alt="phone" style={styles.image} />
            </div>

            <div className="right-block">
                <div style={{ fontSize: 15 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/61/61183.png?w=740&t=st=1681907291~exp=1681907891~hmac=7dcd8a8726aea1919d9fa61b768e6e32101cfa46d2a013b6f7b78f78dcc28e34" onClick={() => onIncreaseQuantity(product)} />
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/809/809201.png?w=740&t=st=1681907263~exp=1681907863~hmac=02a9d2eb5cc5f94e7bd47b1a43569c53d0aeadc20bd31779dbe2295a31880c6c" onClick={() => onDecreaseQuantity(product)} />
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/63/63481.png?w=740&t=st=1681907382~exp=1681907982~hmac=f820d8a912894b17f6237701e0170e0b8317fa69abf2b9688b78154330faeb9b" onClick={() => onDeleteProduct(product.id)} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
};

export default CartItem;