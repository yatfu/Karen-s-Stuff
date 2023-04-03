import data from './ticketData.js' 

let ticket

// ONCLICK FUNCTION USED ON SIGNIN SUBMIT BUTTON
const onClick = () => {
  ticket = getTicketFromCode(document.getElementById('signin-text-input').value)
  if (ticket)
  {
    localStorage.setItem("guestName", ticket.guestName)
    localStorage.setItem("seatNumber", ticket.seatNumber)
    localStorage.setItem("airlineName", ticket.airlineName)
    window.location.href = './welcome.html'
  }
  else {
    document.querySelector('#error-message').innerHTML = 'Ticket not found :('
  }
}

const getTicketFromCode = (code) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].confirmationCode.toLowerCase() === code.toLowerCase()) return data[i] // ignores caps
  }
  console.error('Ticket not found :(')
  return null
} 

// ADD CLICK LISTENER TO SIGNIN SUBMIT BUTTON
document.querySelector('#signin-button').addEventListener('click', onClick)