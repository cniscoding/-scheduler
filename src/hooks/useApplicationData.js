import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // update # of spots
  function updateSpots(state, appointments) {
    const dayObj = state.days.find(d => d.name === state.day);
    let spots = 0;
    for (const id of dayObj.appointments) {
      if (!appointments[id].interview) {
        spots++
      }
    }
    const day = { ...dayObj, spots };
    return state.days.map(d => d.name === state.day ? day : d)
  }

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
          appointments,
          days: updateSpots(state, appointments),
        });
      })
  }

  // creates new interviews
  function bookInterview(id, interview) {

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
          appointments,
          days: updateSpots(state, appointments),
        });
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