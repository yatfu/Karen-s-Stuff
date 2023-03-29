import data from './ticketData.js' 

let name

// ONCLICK FUNCTION USED ON SIGNIN SUBMIT BUTTON
const onClick = () => {
  name = getNameFromSeatNumber(document.getElementById('signin-text-input').value)
  if (name)
  {
    localStorage.setItem("guestName", name)
    window.location.href = './welcome.html'
  }
}

const getNameFromSeatNumber = (seatNumber) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].seatNumber.toLowerCase() === seatNumber.toLowerCase()) return data[i].guestName // ignores caps
  }
  console.error('Ticket not found :(')
  return null
} 

// ADD CLICK LISTENER TO SIGNIN SUBMIT BUTTON
document.getElementById('signin-button').addEventListener('click', onClick)

// SET NAME OF WELCOME MESSAGE
document.getElementById('welcome-message').innerHTML = 'WELCUM ' + name