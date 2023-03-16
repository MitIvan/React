import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
	const crtCtx = useContext(CartContext)

	const totalAmount = `$${crtCtx.totalAmount.toFixed(2)}`
	const hasItems = crtCtx.items.length > 0;

	const cartItemRemoveHandler = id => {
		crtCtx.removeItem(id)
	}

	const cartItemAddHandler = item => {
		crtCtx.addItem({...item, amount: 1})
	}

	const cartItems = (
		<ul className={classes['cart-items']}>{
		crtCtx.items.map(item => (
			<CartItem
				key={item.id}
				name={item.name}
				amount={item.amount}
				price={item.price}
				onRemove={cartItemRemoveHandler.bind(null, item.id)}
				onAdd={cartItemAddHandler.bind(null, item)}
			/>
		))}
		</ul>)

  return (
	  <Modal onClose={props.onClose}>
		  {cartItems}
		  <div className={classes.total}>
			  <span>Total Amount</span>
			  <span>{totalAmount}</span>
		  </div>
		  <div className={classes.actions}>
			  <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
			  {hasItems && <button className={classes.button}>Order</button>}
		  </div>
	  </Modal>
  )
}

export default Cart
