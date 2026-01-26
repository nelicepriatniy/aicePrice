function openModal(modal) {
  modal.classList.add('active')
  offset.classList.add('active')
  document.querySelector('body').classList.add('no-scroll')
  document.querySelector('html').classList.add('no-scroll')
}

function closeModal(modal) {
  modal.classList.remove('active')
  offset.classList.remove('active')
  document.querySelector('body').classList.remove('no-scroll')
  document.querySelector('html').classList.remove('no-scroll')


}

const offset = document.querySelector('.offset')

offset.onclick = () => {
  closeModal(cart)
  closeModal(register)
  closeModal(login)
  closeModal(card)
}

//корзина

const cart = document.querySelector('.cart-modal');
const cartOpenBtns = document.querySelectorAll('.open-cart')
const cartCloseBtns = document.querySelectorAll('.cart-close')

cartCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal(cart)
  })
})
cartOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    openModal(cart)
  })
})

//register modal

const register = document.querySelector('.register-modal');
const registerOpenBtns = document.querySelectorAll('.register-open')
const registerCloseBtns = document.querySelectorAll('.register-close')

registerCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal(register)
  })
})
registerOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    openModal(register)
  })
})


//login modal

const login = document.querySelector('.login-modal');
const loginOpenBtns = document.querySelectorAll('.login-open')
const loginCloseBtns = document.querySelectorAll('.login-close')

loginCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal(login)
  })
})
loginOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    openModal(login)
  })
})

//card modal

const card = document.querySelector('.card-modal');
const cardOpenBtns = document.querySelectorAll('.card-open')
const cardCloseBtns = document.querySelectorAll('.card-close')

cardCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal(card)
  })
})
cardOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    openModal(card)
  })
})



const offsetOpenBtns = document.querySelectorAll('.offset-open')
const offsetCloseBtns = document.querySelectorAll('.offset-close')

offsetCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    offset.classList.remove('active')
  })
})
offsetOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    offset.classList.add('active')
  })
})


//способ доставки

const deliviryInputs = document.querySelectorAll('.cart-hero .form-sposob input')
const deliviryBlocks = document.querySelectorAll('.cart-hero .form-adres-dost')

deliviryInputs.forEach((el) => {
  el.addEventListener('change', () => {
    deliviryBlocks.forEach((block) => {
      block.classList.remove('active')
      if (block.getAttribute('data-v') === el.getAttribute('value')) {
        block.classList.add('active')
      }

    })
  })
})
