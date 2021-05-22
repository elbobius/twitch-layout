const currentWagerMessage = document.querySelector('#currentWagerMessage')
const maxWagerMessage = document.querySelector('#maxWagerMessage')

const wagerMaxRep = nodecg.Replicant('wagerMax')
const wagerCurrentRep = nodecg.Replicant('wagerCurrent')

wagerMaxRep.on('change', (newValue) => {
  maxWagerMessage.textContent = newValue
  updateProgress()
})

wagerCurrentRep.on('change', (newValue) => {
  currentWagerMessage.textContent = newValue
  updateProgress()
})

function updateProgress() {
  const progressValue = document.querySelector('#progressValue')

  const current = currentWagerMessage.textContent
  const max = maxWagerMessage.textContent

  const percentage = (current / max) * 100
  progressValue.setAttribute('style', 'height:' + percentage + '%')
}
