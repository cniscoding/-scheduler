import { useState } from 'react'

// create function that takes in an initial mode
export function useVisualMode(initial) {

  //set the mode state to initial
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (newMode !== mode) {
      setMode(newMode);
      (replace
        ? history[history.length - 1] = newMode
        : history.push(newMode)
      );
    }
  }

  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
      setHistory([...history])
    }
  }
  // return an object with a mode property
  return { mode, transition, back }
}