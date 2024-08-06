import { useState } from 'react'
import reactLogo from './assets/logo3.png'
import viteLogo from '/vite.svg'
import './App.css'
import SocialMediaIcons from './components/SocialMediaIcons'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SocialMediaIcons></SocialMediaIcons>
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
          </a> */}
      </div>
      <h1 className='title'>SHUBHRAAJ</h1>
      <h2 className='subtitle'>Interior & Creations</h2>
      <div className="card">
      </div>
      <div className='nameplate'>
        <h2 id='name1'>ID.Shubham Gandhi</h2>
        <h2 id='name2'>ID.Rajshri Wakchaure</h2>
      </div>
      
         
    
    </>
  )
}

export default App
