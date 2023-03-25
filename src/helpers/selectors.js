const getAppointmentsForDay = (state, day) => {
  if (state.days.length === 0) {
    return []
  }
  const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
  // console.log('arrAppointments', arrAppointments[0].appointments)
  
  if (arrAppointments.length === 0){
    return []
  }
  const appointments = arrAppointments[0].appointments.map(x => state.appointments[x])
  console.log('appointments', appointments)
  return appointments
}

export default getAppointmentsForDay;