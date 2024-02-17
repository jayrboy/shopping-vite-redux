import Navbar from './componens/Navbar'
import CartContainer from './componens/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './redux/cart/cartSlice'
import { useEffect } from 'react'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
