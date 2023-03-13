import { useLocalStorageState } from '@/utils/hooks'

export default function Counter() {
  const [counter, setCounter] = useLocalStorageState('counter', 0)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          justifyContent: 'center',
        }}
      >
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button disabled={counter === 0} onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}
