// Write your solution in this file!
var customerName = 'bob'
var bestCustomer = undefined
const leastFavoriteCustomer = 'apple'
function fixTheScope (){
  customerName = 'bob'
  return customerName
}
function fixTheCustomer() {
  bestCustomer = undefined
  return bestCustomer
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'orange'
  return leastFavoriteCustomer
}
function setBestCustomer () {
  bestCustomer = 'not bob'
  return bestCustomer
}
console.log(customerName)
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  return customerName
}
upperCaseCustomerName()
console.log(customerName)
fixTheScope()

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
  return bestCustomer
}
overwriteBestCustomer()
fixTheCustomer()
changeLeastFavoriteCustomer()