import { useState } from 'react'
// create function that takes in an initial mode
export function useVisualMode(initial) {

  // set the mode state to initial
  const [mode, setMode] = useState(initial);
  // useState to keep track of history
  const [history, setHistory] = useState([initial]);

  // movement within history
  function transition(newMode, replace = false) {
    if (newMode !== mode) {
      setMode(newMode);
      (replace
        ? history[history.length - 1] = newMode
        : history.push(newMode)
      );
    }
  }

  // moves back in history
  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
      setHistory([...history])
    }
  }
  // send custom hooks to application.js
  return { mode, transition, back }
}