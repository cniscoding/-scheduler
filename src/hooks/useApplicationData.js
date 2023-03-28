import React, { useState, useEffect } from "react";
import axios from "axios";

// hook will return an object with four keys
// The state object will maintain the same structure.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.

export default function useApplicationData() {
  // deletes interviews
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments
        });
      })
  }

  // creates new interviews
  function bookInterview(id, interview) {
    // console.log('bookInterview', id, interview);
    // console.log('state', state)
    // console.log('..state', state.appointments[id])

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments
        });
        console.log(setState)
      })
  }

  // set state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });

  // AXIOS calls
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }))
    });
  }, [])

  // sends custom hooks to application.js
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}