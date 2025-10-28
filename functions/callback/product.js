function selectProduct(product,makePaymentFunc){
    console.log(`You have selected the product: ${product}`);
    makePaymentFunc(generateBill)
}

function payment(genBillFunc){
    console.log("Payment successful!");
    genBillFunc(thanksForShopping)
}

function generateBill(thnx){
    console.log("Generating bill...");
    console.log("Bill Generated Successfully")
    thnx()
}

function thanksForShopping(){
    console.log("Thank you for shopping with us!");
}

selectProduct("Laptop",payment)