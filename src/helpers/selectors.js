// export function getAppointmentsForDay(state, day) {
//   if (state.days.length === 0) {
//     return []
//   }
//   const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
//   if (arrAppointments.length === 0) {
//     return []
//   }
//   const appointments = arrAppointments[0].appointments.map(x => state.appointments[x])
//   return appointments
// }

// export function getInterviewersForDay (state, day) {
//   if (state.days.length === 0) {
//     return []
//   }
//   const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
//   if (arrAppointments.length === 0) {
//     return []
//   }
//   const appointments = arrAppointments[0].interviewers.map(x => state.interviewers[x])
//   return appointments
// }

export function getAppointmentsForDay (state, day) {
  const appointmentFound = state.days.find (findApp => findApp.name === day)
  console.log('appointmentFound', appointmentFound)
  if(appointmentFound) {
    console.log(appointmentFound.appointments.map(x => state.appointments[x]))
    return appointmentFound.appointments.map(x => state.appointments[x])
  } else {
    return []
  }
}

export function getInterviewersForDay (state, day) {
  const appointmentFound = state.days.find (findApp => findApp.name === day)
  console.log('appointmentFound', appointmentFound)
  if(appointmentFound) {
    console.log(appointmentFound.appointments.map(x => state.appointments[x]))
    return appointmentFound.interviewers.map(x => state.interviewers[x])
  } else {
    return []
  }
}


export function getInterview(state, interview) {
  if (interview) {
    return {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] }
    }
  }
  return null

}

