import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
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

  const handleClick = (index) => {
    if (!isActive || board[index]) return
    
    const newBoard = [...board]
    newBoard[index] = isXNext ? '❌' : '⭕'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  const startTimer = () => {
    setBoard(Array(9).fill(null))
    setIsActive(true)
    setMinutes(1)
    setSeconds(59)
  }

  return (
    <>
      <div className="area_counter">
        <div id='timer'>
          ⏱️ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
      
      <main id='container'>
        {board.map((value, i) => (
          <div 
            key={i} 
            className='square' 
            onClick={() => handleClick(i)}
            style={{ cursor: isActive ? 'pointer' : 'not-allowed' }}
          >
            {value}
          </div>
        ))}
      </main>

      <div className="center_btn">
        <button onClick={startTimer}>
          {isActive ? 'Reiniciar' : 'Começar Jogo'}
        </button>
      </div>
    </>
  )
}

export default App