const maxInput = document.querySelector('#maxInput')
const currentInput = document.querySelector('#currentInput')
const submitButton = document.querySelector('#submitButton')

const wagerMaxRep = nodecg.Replicant('wagerMax', { defaultvalue: 0 })
const wagerCurrentRep = nodecg.Replicant('wagerCurrent', { defaultvalue: 1000 })

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
