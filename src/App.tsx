import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from "./styles"

import MyRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  )
  
}

export default App