import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './redux/cart/cartSlice'
import { useEffect } from 'react'
import Model from './components/Model'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Model />
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
