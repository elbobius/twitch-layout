const startAmountInput = document.querySelector('#startAmountInput')
const bonusOpeningAmountInput = document.querySelector(
  '#bonusOpeningAmountInput'
)
const profitInput = document.querySelector('#profitInput')
const totalBonusesInput = document.querySelector('#totalBonusesInput')
const averageStakeInput = document.querySelector('#averageStakeInput')

const submitButton = document.querySelector('#submitButton')

const startAmountRep = nodecg.Replicant('startAmount', { defaultvalue: '500' })
const bonusOpeningAmountRep = nodecg.Replicant('bonusOpeningAmount', {
  defaultvalue: '500',
})
const profitRep = nodecg.Replicant('profit', { defaultvalue: '500' })
const totalBonusesRep = nodecg.Replicant('totalBonuses', {
  defaultvalue: '500',
})
const averageStakeRep = nodecg.Replicant('averageStake', {
  defaultvalue: '500',
})

startAmountRep.on('change', (newValue) => {
  startAmountInput.value = newValue
})

bonusOpeningAmountRep.on('change', (newValue) => {
  bonusOpeningAmountInput.value = newValue
})

profitRep.on('change', (newValue) => {
  profitInput.value = newValue
})

totalBonusesRep.on('change', (newValue) => {
  totalBonusesInput.value = newValue
})

averageStakeRep.on('change', (newValue) => {
  averageStakeInput.value = newValue
})

submitButton.onclick = () => {
  startAmountRep.value = startAmountInput.value
  bonusOpeningAmountRep.value = bonusOpeningAmountInput.value
  profitRep.value = profitInput.value
  totalBonusesRep.value = totalBonusesInput.value
  averageStakeRep.value = averageStakeInput.value
}
