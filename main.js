const stepControl = document.querySelector('#step-control')
const btnControl = document.querySelector('#btn-control')
const steps = document.querySelectorAll('.step')
const parts = document.querySelectorAll('.part')
const nextBtn = document.querySelector('.next')
const backBtn = document.querySelector('.back')
const checkBtn = document.querySelector('.check')
// const cartControl = document.querySelector('.add-cart-btn')
// const addBtn = document.querySelector('.add-item-btn')
// const removeBtn = document.querySelector('.remove-item-btn')
// const quantity = document.querySelector('.quantity')
// const price = document.querySelector('.price')

let step = 0

btnControl.addEventListener('click', formStepControl)

function formStepControl(event) {
  event.preventDefault()
  const nowStepDom = steps[step]

  if (event.target.matches('.next') && event.target.textContent === '下一步') {
    const nextStepDom = steps[step + 1]
    nowStepDom.classList.remove('active')
    nowStepDom.classList.add('checked')
    nextStepDom.classList.add('active')
    parts[step].classList.add('d-none')
    parts[step + 1].classList.remove('d-none')
    step += 1

  } else if (event.target.matches('.back') && event.target.textContent === '上一步') {
    const backStepDom = steps[step - 1]
    nowStepDom.classList.remove('active')
    backStepDom.classList.remove('checked')
    backStepDom.classList.add('active')
    parts[step].classList.add('d-none')
    parts[step - 1].classList.remove('d-none')
    step -= 1
  }

  btnWitch()
}

function btnWitch() {
  if (step === 0) {
    backBtn.setAttribute('disabled', 'disabled')
  } else {
    backBtn.removeAttribute('disabled')
  }

  if (step === 2) {
    nextBtn.textContent = '送出申請'
  } else {
    nextBtn.textContent = '下一步'
  }
}
