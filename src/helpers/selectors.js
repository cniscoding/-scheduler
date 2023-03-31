export function getAppointmentsForDay(state, day) {
  const appointmentFound = state.days.find(findApp => findApp.name === day)
  if (appointmentFound) {
    return appointmentFound.appointments.map(x => state.appointments[x])
  } else {
    return []
  }
}

export function getInterviewersForDay(state, day) {
  const appointmentFound = state.days.find(findApp => findApp.name === day)
  if (appointmentFound) {
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

