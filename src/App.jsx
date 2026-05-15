import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [isActive, setIsActive] = useState(false)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    let interval = null

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1)
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1)
          setSeconds(59)
        } else {
          setIsActive(false)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, seconds, minutes])

  const startTimer = () => {
    setIsActive(true)
  }

  return (
    <>
      <div className="area_counter">
        <div id='timer'>
          ⏱️ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
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

      <div className="center_btn">
        <button onClick={startTimer}>Começar</button>
      </div>
    </>
  )
}

export default App