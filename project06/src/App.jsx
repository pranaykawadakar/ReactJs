import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Directly accesses the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
