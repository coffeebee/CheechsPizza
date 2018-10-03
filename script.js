pizzaTypes = ["Mediteranian", "Alfredo", "Supreme", "Meatlovers", "Chicken Bacon Ranch"];
pizzaCosts = [8.25, 5.75, 6.50, 7.85, 10.85];
document.getElementById("submit").addEventListener("click", function(){
    name = document.getElementById("orderInfoName").value;
    phone = document.getElementById("orderInfoNumber").value;
    type = document.getElementById("pizzasDrpdn").value;
    quantity = document.getElementById("qnty").value;
    sub = pizzaCosts[type] * quantity;
    total = sub + (sub * 0.076);
    tax = total - sub; 
    document.getElementById("name").innerHTML = `Thank you ${name} for choosing Cheech's Pizza`;
    if (quantity == 1){
        document.getElementById("order").innerHTML = `Your order is ${quantity} ${pizzaTypes[type]} pizza`;

    }
    else{
        document.getElementById("order").innerHTML = `Your order is ${quantity} ${pizzaTypes[type]} pizzas`;
    }
    document.getElementById("subTotal").innerHTML = `Subtotal: $${sub.toFixed(2)}`;
    document.getElementById("taxTotal").innerHTML = `Tax: $${tax.toFixed(2)}`;
    document.getElementById("finalTotal").innerHTML = `Total: $${total.toFixed(2)}`;
    document.getElementById("contact").innerHTML = `A call will be made to ${phone} when your order is ready`;
    event.preventDefault();
})
function reloadPage(){
    location.reload();
}
function pizzaType(){
    for (i = 0;i < pizzaTypes.length; i++){
        var addPizza = document.getElementById("pizzasDrpdn");
        var option = document.createElement("option");
        option.text = `${pizzaTypes[i]} $${pizzaCosts[i]}`
        option.value = i
        addPizza.add(option)
    }
}
pizzaType()