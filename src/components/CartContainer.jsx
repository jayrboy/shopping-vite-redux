import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from '../redux/modal/modalSlice'

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>ออเดอร์สินค้า</h2>
          <h4 className="empty-cart">ไม่มีรายการสินค้าในตะกร้า</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>ออเดอร์สินค้า</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            ยอดที่ต้องชำระทั้งหมด
            <span>
              ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </span>
          </h4>
        </div>

        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal())
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
