function cardnumber() {
  let CardNumber = document.getElementById('cardnumber').value
  const BankCardNumber = document.querySelector('.cardnumber')
  // console.log(BankCardNumber);
  // console.log(CardNumber);
  if (CardNumber.length > 16) {
    CardNumber = CardNumber.slice(0, 16);
  }
  const formattedCardNumber = CardNumber.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
  BankCardNumber.textContent = formattedCardNumber || "#### #### #### ####";
}

function fullname() {
  const FullName = document.querySelector('#fullname').value
  const BankFullName = document.querySelector('.cardholder>h2')
  BankFullName.textContent = FullName

}

function month() {
  const select = document.getElementById('Month')
  const month = document.querySelector('.date>.month')
  month.textContent = select.value
}

function year() {
  const select = document.getElementById('year')
  const year = document.querySelector('.date>.year')
  year.textContent = select.value
}


const card = document.querySelector('.card')
const cvvInput = document.querySelector('#cvvInput')
  const backCvv = document.querySelector('.backcard>.putcv')
  console.log(cvvInput.value);
  
  cvvInput.addEventListener("focus", () => {
  card.classList.add("charkhesh")
  // console.log('yes');

});
cvvInput.addEventListener("blur", () => {
  card.classList.remove("charkhesh")
  // console.log('no');

})

cvvInput.addEventListener('input',()=>{
  if (cvvInput.value.length > 4) {
    cvvInput = cvvInput.value.slice(0, 4);
  }
  backCvv.textContent = cvvInput.value 

})  