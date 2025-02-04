/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  while (true) {
    let grocery_items = String(window.prompt("Input grocery items"));
    if (grocery_items == "done") {
      break;
    }
    console.log(grocery_items);
  }
};
buildGroceryList();
