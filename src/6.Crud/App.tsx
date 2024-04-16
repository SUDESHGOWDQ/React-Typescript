import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './6.Crud/Home'
import Create from './6.Crud/Create'
import Update from './6.Crud/Update'

const App:React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
