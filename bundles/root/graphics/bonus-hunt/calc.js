const startAmount = document.querySelector('#startAmount')
const bonusOpeningAmount = document.querySelector('#bonusOpeningAmount')
const profit = document.querySelector('#profit')
const totalBonuses = document.querySelector('#totalBonuses')
const averageStake = document.querySelector('#averageStake')

const startAmountRep = nodecg.Replicant('startAmount')
const bonusOpeningAmountRep = nodecg.Replicant('bonusOpeningAmount')
const profitRep = nodecg.Replicant('profit')
const totalBonusesRep = nodecg.Replicant('totalBonuses')
const averageStakeRep = nodecg.Replicant('averageStake')

startAmountRep.on('change', (newValue) => {
  startAmount.textContent = newValue + '€'
})

bonusOpeningAmountRep.on('change', (newValue) => {
  bonusOpeningAmount.textContent = newValue + '€'
})

profitRep.on('change', (newValue) => {
  profit.textContent = newValue + '€'
})

totalBonusesRep.on('change', (newValue) => {
  totalBonuses.textContent = newValue
})

averageStakeRep.on('change', (newValue) => {
  averageStake.textContent = newValue + '€'
})
