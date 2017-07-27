// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  let avgPrice = 0;
  let sumPrices = 0;
  for (let i = 0; i < data.length; i++) {
    sumPrices = sumPrices + data[i].price;
  } avgPrice = ((sumPrices) / data.length).toFixed(2);
  console.log("The average price is $" + avgPrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let itemsBetween = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      itemsBetween.push(data[i].title);
    }
  } console.log(itemsBetween.join("\n"));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  let itemTitle = [];
  let itemPrice = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      itemTitle.push(data[i].title);
      itemPrice.push(data[i].price);
    }
  }
  console.log(itemTitle + " costs " + itemPrice + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4() {
  let woodItems = [];
  for (let i = 0; i < data.length; i++) {

    for (let k = 0; k < data[i].materials.length; k++) {
      if (data[i].materials[k] === "wood") {
        woodItems.push(data[i].title);
      }
    }
  } console.log(woodItems.join(" is made of wood.\n"));
}



// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {

}


// 6: How many items were made by their sellers?
// Answer:
function question6() {

}