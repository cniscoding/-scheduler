const getAppointmentsForDay = (state, day) => {
  if (state.days.length === 0) {
    return []
  }
  const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
 
  
  if (arrAppointments.length === 0){
    return []
  }
  const appointments = arrAppointments[0].appointments.map(x => state.appointments[x])

  return appointments

  

  // return array of appointments for given day
}

export default getAppointmentsForDay;