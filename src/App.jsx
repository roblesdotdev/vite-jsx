import Button from '@/componets/ui/Button'
import { useFoo } from '@/lib/hooks'

function App() {
  const { state, setState } = useFoo()

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
