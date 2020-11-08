function buyMax() {
    document.getElementById("quantity").value = 30;
}

function addToCart(product) {
    var checkDupes = document.cookie.split(";");
    for (i of checkDupes) {
        if (i.indexOf(product) != -1) {
            alert("Already added product to cart");
            return "";
        }
    }

    var productNumber = getNewProductNumber(1);


    var expDate = new Date();
    expDate.setHours(expDate.getHours() + 24)

    var quantity = document.getElementById("quantity").value

    document.cookie = "product" + productNumber + "=" + product + ";path=/;expires=" + expDate.toDateString;
    document.cookie = product + "=" + quantity + ";path=/;expires=" + expDate.toDateString;

    document.cookie = "product1" + productNumber1 + "=" + product1 + ";path=/;expires1=" + expDate.toDateString;
    document.cookie = product1 + "=" + quantity + ";path=/;expires1=" + expDate.toDateString;
}


function getNewProductNumber(num) {
    var cookies = document.cookie.split(";");
    for (i of cookies) {
        if (i.indexOf(num) != -1) {
            num++;
            getNewProductNumber(num);
        }
    }
    return num;
}