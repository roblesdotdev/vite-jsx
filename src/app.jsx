import Button from '@/componets/ui/button'
import { useLocalStorageState } from '@/utils/hooks'

function App() {
  const [state, setState] = useLocalStorageState('counter', 0)

  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {state} </h1>
      <Button text="Increment" onClick={handleClick} />
    </div>
  )
}

export default App
