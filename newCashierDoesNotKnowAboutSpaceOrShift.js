/*Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke*/



/*JS*/




function getOrder(input) {
  const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke"
  ];

  const count = {};

  // Lowercase version of menu to match against input
  const lowerMenu = menu.map(item => item.toLowerCase());

  // Count each item in the input
  for (let item of lowerMenu) {
    let regex = new RegExp(item, 'g');
    const matches = input.match(regex);
    count[item] = matches ? matches.length : 0;
  }

  // Build output based on the menu order
  const output = [];
  for (let i = 0; i < menu.length; i++) {
    const word = menu[i];
    const lowerWord = word.toLowerCase();
    for (let j = 0; j < count[lowerWord]; j++) {
      output.push(word);
    }
  }

  return output.join(" ");
}
