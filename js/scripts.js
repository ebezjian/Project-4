// Business Logic
//these are the three objects that can be changed by the users selections
function PizzaOrder(sizes, toppings, cost) {
  this.sizes = sizes;
  this.toppings = toppings;
  this.cost= cost;
};  
//let newOrder = new PizzaOrder ("Large",["Mushroom"], 4);

PizzaOrder.prototype.priceAmount = function(){
  let price = 0;
  if (this.sizes === "Large") {
    price += 15;
    console.log(price);
  }
  if (this.sizes === "Medium") {
    price += 10;
  }
  if (this.sizes === "Small") {
    price += 5;
  }
  return price * this.cost;
}
//User Logic
$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    const inputSize = $("#sizes").find(":selected").text();
    const inputToppings = $("#toppings").find(":selected").text();
    const amount = $("#amount").val();
    let newPizza = new PizzaOrder(inputSize, inputToppings, amount);
    $("#totalCost").text("$" + newPizza.priceAmount());
  })
})

