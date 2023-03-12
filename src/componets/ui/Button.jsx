export default function Button({ text, onClick }) {
  return (
    <button
      style={{ fontSize: '1.3em', padding: '0.4em 1.3em' }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
