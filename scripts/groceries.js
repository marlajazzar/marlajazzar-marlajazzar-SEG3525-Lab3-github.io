// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
    {
        name: "Broccoli ",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 2.99,
        vegetable: true,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Broccoli.png'
    },
    {
        name: "ACE, Organic Whole Wheat Bread Sliced ",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        nonOrganic: false,
        price: 4.69,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Bread.png'
    },
    {
        name: "Pacific Salmon Fillets (567g) ",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 8.99,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Salmon.png'
    },
    {
        name: "Honeycrisp Apple ",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 1.11,
        vegetable: false,
        fruit: true,
        dairyProduct: false,
        imgFile: 'Appld.png'
    },
    {
        name: "Organic Bananas, Bunch ",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 1.99,
        vegetable: false,
        fruit: true,
        dairyProduct: false,
        imgFile: 'Banana.png'
    },
    {
        name: "Mini Chocolate Croissants (423g) ",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        nonOrganic: true,
        price: 0.75,
        vegetable: false,
        fruit: false,
        dairyProduct: true,
        imgFile: 'Banana.png'
    },
    {
        name: "Kinnikinnick, Gluten-Free Pancake & Waffle Mix  ",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        nonOrganic: false,
        price: 3.69,
        vegetable: false,
        fruit: false,
        dairyProduct: true,
        imgFile: 'Pancake.png'
    },
    {
        name: "Organic Chicken Bites (454g) ",
        vegetarian: false,
        glutenFree: false,
        organic: true,
        nonOrganic: false,
        price: 11.49,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Chicken.png'
    },
    {
        name: "Clover Leaf, Solid White Tuna Albacore in Water ",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        nonOrganic: true,
        price: 2.29,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Tuna.png'
    },
    {
        name: "Ristorante, Pizza Pepperoni (320g) ",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        nonOrganic: true,
        price: 5.49,
        vegetable: false,
        fruit: false,
        dairyProduct: false,
        imgFile: 'Pizza.png'
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];
    for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "Vegetarian_Org") && ((prods[i].vegetarian == true) && (prods[i].organic == true)) ){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "Vegetarian_NonOrg") && ((prods[i].vegetarian == true) && (prods[i].nonOrganic == true))){
            product_names.push(prods[i].name);
        }
        else if((restriction == "GlutenFree_Org") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
                product_names.push(prods[i].name);
            }
            else if ((restriction == "GlutenFree_NonOrg") && ((prods[i].glutenFree == true) && (prods[i].nonOrganic == true))){
                product_names.push(prods[i].name);
            }
            else if ((restriction == "Vegetarian_GlutenFree_Org") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].organic == true))){
                product_names.push(prods[i].name);
            }
            else if ((restriction == "Vegetarian_GlutenFree_NonOrg") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].nonorganic == true))){
                product_names.push(prods[i].name);
            }
        else if (restriction == "None"){
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}

function restrictListProducts2(prods, restriction) {
    let product_names2 = [];
    for (let i=0; i<prods.length; i+=1) {

        if ((restriction == "Vegetarian_Org") && ((prods[i].vegetarian == true) && (prods[i].organic == true)) ){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_NonOrg") && ((prods[i].vegetarian == true) && (prods[i].nonOrganic == true))){
            product_names2.push(prods[i]);
        }
        else if((restriction == "GlutenFree_Org") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names2.push(prods[i]);
        }
        else if ((restriction == "GlutenFree_NonOrg") && ((prods[i].glutenFree == true) && (prods[i].nonOrganic == true))){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_GlutenFree_Org") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].organic == true))){
            product_names2.push(prods[i]);
        }
        else if ((restriction == "Vegetarian_GlutenFree_NonOrg") && (((prods[i].glutenFree == true) && (prods[i].vegetarian == true)) && (prods[i].nonorganic == true))){
            product_names2.push(prods[i]);
        }
        else if (restriction == "None"){
            product_names2.push(prods[i]);
        }
    }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort (inspirer)
    product_names2.sort(function (x, y) {
        return x.price-y.price;
    });

    return product_names2;
}

function chosenFruitProducts (chosenProducts) {
    let product_namesVeg = [];
    for (let i=0; i<chosenProducts.length; i+=1) {
        if (chosenProducts[i].fruit == true ) {
            product_namesVeg.push(chosenProducts[i]);
        }
    }
}

function chosenDairyProducts (chosenProducts) {
    let product_namesVeg = [];
    for (let i=0; i<chosenProducts.length; i+=1) {
        if (chosenProducts[i].dairyProduct == true ) {
            product_namesVeg.push(chosenProducts[i]);
        }
    }
}

function chosenVegetableProducts (chosenProducts) {
    let product_namesVeg = [];
    for (let i=0; i<chosenProducts.length; i+=1) {
        if (chosenProducts[i].vegetable == true ) {
            product_namesVeg.push(chosenProducts[i]);
        }
    }
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
   let totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
