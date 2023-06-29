import { Outlet } from 'react-router-dom'
import './App.css'
import LazyCompo from './exercice/5_lazy/LazyCompo'

function App() {
  return (
    <div id="myMain" className="App">
      <div className="center-hor">
        <div id="divMain">

          <LazyCompo />
        </div>

      </div>
    </div>
  )
}

export default App
