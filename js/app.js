
const offset = document.querySelector('.offset')

offset.onclick = () => {
  cart.classList.remove('active')
  register.classList.remove('active')
  login.classList.remove('active')
  card.classList.remove('active')

  offset.classList.remove('active')
}

//корзина

const cart = document.querySelector('.cart-modal');
const cartOpenBtns = document.querySelectorAll('.open-cart')
const cartCloseBtns = document.querySelectorAll('.cart-close')

cartCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    cart.classList.remove('active')
    offset.classList.remove('active')
  })
})
cartOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    cart.classList.add('active')
    offset.classList.add('active')
  })
})

//register modal

const register = document.querySelector('.register-modal');
const registerOpenBtns = document.querySelectorAll('.register-open')
const registerCloseBtns = document.querySelectorAll('.register-close')

registerCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    register.classList.remove('active')
    offset.classList.remove('active')
  })
})
registerOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    register.classList.add('active')
    offset.classList.add('active')
  })
})


//login modal

const login = document.querySelector('.login-modal');
const loginOpenBtns = document.querySelectorAll('.login-open')
const loginCloseBtns = document.querySelectorAll('.login-close')

loginCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    login.classList.remove('active')
    offset.classList.remove('active')
  })
})
loginOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    login.classList.add('active')
    offset.classList.add('active')
  })
})

//card modal

const card = document.querySelector('.card-modal');
const cardOpenBtns = document.querySelectorAll('.card-open')
const cardCloseBtns = document.querySelectorAll('.card-close')

cardCloseBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    card.classList.remove('active')
    offset.classList.remove('active')
  })
})
cardOpenBtns.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault()
    card.classList.add('active')
    offset.classList.add('active')
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
