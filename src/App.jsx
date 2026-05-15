
import { useState } from 'react'
import './index.css'

function App() {

  const [timer, setTimer] = useState(null)
  const [restTimer, setRestTimer] = useState(false)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(59)


  const timerDecrease = () => {
    setRestTimer(true)

    const timerInterval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000);
      return () => clearInterval(timerInterval)
  }


  return (
    <>

      <div className="area_counter">
        <div id='timer'>⏱️ { restTimer === true ? timer : '' }</div>
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

      <div className="center_btn"><button onClick={timerDecrease}>Começar</button></div>
  
    </>
  )
}

export default App
