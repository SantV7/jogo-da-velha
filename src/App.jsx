
import { useState } from 'react'
import './index.css'

function App() {

  const [timer, seTimer] = useState(null)
  const [restTimer, setRestTimer] = useState(false)

  const timerDecrease = () => {
    const min = 1
    const seconds = 59
    setTimer(`${min}:${seconds} restantes`)

    const startTime = setInterval(() => {
      while(seconds != 0) {
        seconds - 1
      }
    }, 1000)

    return () => clearInterval(startTime)
  }


  return (
    <>

      <div className="area_counter">
        <div id='timer'>⏱️ { restTimer === null ? timer : 'tempo' }</div>
      </div>
      
      <main id='container'>
        <div className='square'>❌</div>
        <div className='square'>❌</div>
        <div className='square'>❌</div>
        <div className='square'>❌</div>
        <div className='square'>⭕</div>
        <div className='square'>⭕</div>
        <div className='square'>⭕</div>
        <div className='square'>❌</div>
        <div className='square'>⭕</div>
      </main>

      <button onClick={timerDecrease}>Começar</button>
      
           
  
    </>
  )
}

export default App
