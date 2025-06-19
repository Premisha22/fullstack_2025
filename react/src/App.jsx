/*
import Child from './components/Child.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
const App = () => {
  var fruit = ["Apple","Banana","Orange"]
  var users={username:"Premi",password:"3245"}
  return (
    <>
    <div>
    <Child name="Premi" phoneno="9876543210" Dept="IT"/>
    <Child name="Abii" phoneno="9876543210" Dept="IT"/>
    <Home items = {fruit} users={users}/>
    <About/>
    <Contact/>
    <Skills/>
    </div>
    </>
  )
}

export default App*/
import React from 'react';

import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;