import random
from pyscript import web

# Global variables for valid characters
validUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
validLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
validNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
validSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"]
validChars = [validUpper, validLower, validNumber, validSpecial]

# Main function
def generatePassword(event = None):
  if event:
    event.preventDefault()
  else:
    return

  n = int(web.page["numchars"].value)
  ret = ""

  # input santiy
  if n < 8:
    return

  # input santiy
  if n > 24:
    return

  # The generating code
  for i in range(0, n):
    rando1 = int(random.random() * 4)
    rando2 = int(random.random() * len(validChars[rando1]))
    ret = ret + validChars[rando1][rando2]
  output = web.page["passoutput"]
  output.innerText = ret

Element("form").element.onsubmit = generatePassword