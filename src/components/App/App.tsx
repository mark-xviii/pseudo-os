import { Provider } from 'react-redux'
import { store } from '../../state-management/stores/root.store'
import Desktop from '../Desktop/Desktop'

function App() {
  return (
    <Provider store={store}>
      <Desktop/>
    </Provider>
  )
}

export default App
