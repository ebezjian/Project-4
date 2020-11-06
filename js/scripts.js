// Business Logic
//these are the three objects that can be changed by the users selections
function PizzaOrder(sizes, toppings, cost) {
  this.sizes = sizes;
  this.toppings = toppings;
  this.cost= cost;
};  
//let newOrder = new PizzaOrder ("Large",["Mushroom"], 4);

//this is a prototype which only has a simple formula for taking in sizes as the main price point. Depending on which size the user selects, regardless of topppings, it will add up these prices.
PizzaOrder.prototype.priceAmount = function(){
  let price = 0;
  if (this.sizes === "Large") {
    price += 15;
    
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
    let amount = $("#amount").val();
    let newPizza = new PizzaOrder(inputSize, inputToppings, amount);
    
    let grandAmount = $("#totalCost").val();
    let currentAmount = newPizza.priceAmount();
    console.log(typeof currentAmount);
    let totalAmount = parseInt(currentAmount || 0 ) + parseInt(grandAmount || 0);
    $("#totalCost").val(totalAmount);

    $("#checkList").append("<li>" + newPizza.sizes + newPizza.toppings + newPizza.cost + "</li>");
  })
})

