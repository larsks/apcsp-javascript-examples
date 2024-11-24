require('../codehs');

let ITEMS_IN_INVENTORY = 20;

while (ITEMS_IN_INVENTORY > 0) {
    println("we have " + ITEMS_IN_INVENTORY + " in inventory ");
    const items = readInt("how many would you like to buy? ");
    if (ITEMS_IN_INVENTORY >= items) {

        ITEMS_IN_INVENTORY = ITEMS_IN_INVENTORY - items;
        println("now we have " + ITEMS_IN_INVENTORY + " left");

    }
    else {
        println("There is not enough in inventory for that purchase.");
    }

}
println("all out");
