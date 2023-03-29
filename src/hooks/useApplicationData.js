import React, { useState, useEffect } from "react";
import axios from "axios";

// hook will return an object with four keys
// The state object will maintain the same structure.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.

export default function useApplicationData() {
  // update # of spots
  function updateSpots(state, appointments) {
    // console.log('state', state)
    const dayObj = state.days.find(d => d.name === state.day);
    // console.log('dayObj', dayObj)
    let spots = 0;
    for (const id of dayObj.appointments) {
      // console.log('id', id)
      // console.log('spots',spots)
      if (!appointments[id].interview) {
        // console.log('appointments[id].interview', appointments[id].interview)
        spots++
      }
    }
      const day = { ...dayObj, spots };
      // console.log('day',day)
      console.log('state', state.days.map(d => d.name === state.day ? day : d))
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
      //add updateSpots somewhere?
      // need code review. is this consider changing state directly?
      
      setState({
        ...state,
        appointments,
        days : updateSpots(state, appointments),
      });
    })
     .catch((res) => {
      console.log(res)
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
      //add updateSpots somewhere?
      setState({
        ...state,
        appointments,
        days : updateSpots(state, appointments),
      });
    })
  
    .catch((res) => {
      console.log(res)
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