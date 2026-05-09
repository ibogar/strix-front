import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from "./styles"

import MyRoutes from './routes'

function App() {

  return (
    <BrowserRouter>
            <GlobalCss />
            <MyRoutes />
    </BrowserRouter>
  )
  
}

export default App