let cardNumber;
let cardType = `null`;
let discoverCard = new RegExp(/^6011/g)
let visaCard = new RegExp(/^4/g)
let masterCard = new RegExp(/^[[50][51][52][53][54][55]]/g)
let amExpress = new RegExp(/^[[34][37]]/g)
function cardTypeTest(cardNumber){
   cardNumber+= ''
   if (cardNumber.length === 16){
       // console.log('initiated')
       if (discoverCard.test(cardNumber)){
           cardType = 'Discover'
       } else if (visaCard.test(cardNumber)){
           cardType = 'Visa'
       } else if (masterCard.test(cardNumber)){
           cardType = 'MasterCard'
       } else {
           cardType = 'invalid'
       }
   } else if (amExpress.test(cardNumber)&&cardNumber.length===15){
       cardType = 'American Express'
   } else {
       cardType = 'invalid'
   }
   console.log(cardType)
   return cardType;
}

cardTypeTest(1111111111111111)
cardTypeTest(6011111122223333)
cardTypeTest(4373333333333333)