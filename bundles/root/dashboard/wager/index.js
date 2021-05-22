const maxInput = document.querySelector('#maxInput')
const currentInput = document.querySelector('#currentInput')
const submitButton = document.querySelector('#submitButton')

const wagerMaxRep = nodecg.Replicant('wagerMax')
const wagerCurrentRep = nodecg.Replicant('wagerCurrent')

wagerMaxRep.on('change', (newValue) => {
  maxInput.value = newValue
})

wagerCurrentRep.on('change', (newValue) => {
  currentInput.value = newValue
})

submitButton.onclick = () => {
  wagerMaxRep.value = maxInput.value
  wagerCurrentRep.value = currentInput.value
}
