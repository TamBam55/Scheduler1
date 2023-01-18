export function getAppointmentsForDay(state, day) {
  const states = [];
  if (state !== undefined && "days" in state) {
    for (const element of state.days) {
      if (element.name === day) {
        for (const appointment of element.appointments) {
          if (state.appointments[appointment]) {
            states.push(state.appointments[appointment]);
          }
        }
      }
    }
  }
    console.log(states) 
    return states;
}