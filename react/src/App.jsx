// 
// import Child from './components/Child.jsx'
 import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Counter from './components/Counter.jsx'
import Hooks from './pages/Hooks.jsx'
import State from './components/Hooks/State.jsx'
import Effects from './components/Hooks/Effects.jsx'
import Effect2 from './components/Hooks/Effect2.jsx'
import Login from './pages/Login.jsx'
// const App = () => {
//   var fruit = ["Apple","Banana","Orange"]
//   var users={username:"Premi",password:"3245"}
//   return (
//     <>
//     <div>
//     <Child name="Premi" phoneno="9876543210" Dept="IT"/>
//     <Child name="Abii" phoneno="9876543210" Dept="IT"/>
//     <Home items = {fruit} users={users}/>
//     <About/>
//     <Contact/>
//     <Skills/>
//     </div>
//     </>
//   )
// }

// export default App*/
// /*
//  import React from 'react';

// import Counter from './components/Counter';

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;

import React from 'react'

import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'

function App() {
  var fruit = ["Apple","Banana","Orange"]
  var users={username:"Premi",password:"3245"}
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element ={<Home items = {fruit} users={users}/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/counter'element={<Counter/>}/>
        <Route path='/hooks'element={<Hooks/>}/>
        <Route path='/state'element={<State/>}/>
        <Route path='/effects'element={<Effects/>}/>
        <Route path='/effect2'element={<Effect2/>}/>
        <Route path='/Login'element={<Login/>}/>

      </Routes>
    </div>
  )
}
export default App;