// Business Logic
//these are the three objects that can be changed by the users selections
function PizzaOrder(sizes, toppings, cost) {
  this.sizes = sizes;
  this.toppings = toppings;
  this.cost= cost;
};  
let newOrder = new PizzaOrder ("Large",["Mushroom"], 4);

PizzaOrder.prototype.priceAmount = function(){
  let price = 0;
  if (this.sizes === "Large") {
    price += 15;
    console.log(price);
  }
}
//User Logic

