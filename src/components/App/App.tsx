import { Provider } from 'react-redux'
import { store } from '../../state-management/stores/root.store'
import DisplayManager from '../DisplayManager/DisplayManager'

function App() {
  return (
    <Provider store={store}>
      <DisplayManager />
    </Provider>
  )
}

export default App
