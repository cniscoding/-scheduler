export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return []
  }
  const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
  if (arrAppointments.length === 0) {
    return []
  }
  const appointments = arrAppointments[0].appointments.map(x => state.appointments[x])
  return appointments
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

