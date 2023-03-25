const getAppointmentsForDay = (state, day) => {
  const arrAppointments = state.days.filter(dayFilter => dayFilter.name === day)
  console.log('arrAppointments', arrAppointments)
  return arrAppointments
  // const appID = Object.values(arrAppointments.appointments)
  // console.log('appID.map(id => state.appointments[id]',appID.map(id => state.appointments[id]))
  // return appID.map(id => state.appointments[id])
  // i want state.appointments[1] / [2] / [3]
  // return array of appointments for given day
}

export default getAppointmentsForDay;