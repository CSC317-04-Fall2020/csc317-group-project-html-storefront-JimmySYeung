function buyMax() {
    document.getElementById("quantity").value = 30;
}

function addToCart(product){
    var expDate = new Date();
    expDate.setHours(expDate.getHours()+24)

    var quantity = document.getElementById("quantity").value

    document.cookie = "product=" + product +";path=/;expires=" + expDate.toDateString;
    document.cookie = product + "=" + quantity +";path=/;expires=" + expDate.toDateString;
}

function putItemsToCart(){
    var items = [];
    var quantity = [];
    var allCookies = document.cookie.split(';');

    for(var i = 0; i < allCookies.length; i++){
        if(allCookies[i].indexOf("product") != -1){
            match = allCookies[i].replace(" ","");
            items.push(match.substr(8));
        }
    }

    for(x of items){
        for(var i = 0; i < allCookies.length; i++){
            if(allCookies[i].indexOf(x) != -1){
                match = allCookies[i].replace(" ","");
                quantity.push(match.substr(x.length+1));
            }
        }
    }

    for(var i = 0; i < items.length; i++){
        var cartRow = document.createElement('div');
        cartRow.classList.add('fullcartrow');
        var cart = document.getElementById('fullcart');
        var name = "";
        var img = "";

        switch(items[i]){
            case('AmericanDream'):
                name = "Chasing the American Dream";
                img = "../books/AmericanDream.jpg";
                break;
            case('deadpoolpikachu'):
                name = "Deadpool Pikachu";
                img = "../toys/deadpoolpikachu.JPG";
                break;
            case('doggycoin'):
                name = "Doggy Coin";
                img = "../toys/doggycoin.JPG";
                break;
            case('heroacademiavol1'):
                name = "My Hero Academia vol. 1";
                img = "../books/heroacademiavol1.jpg";
                break;
            case('introtojava'):
                name = "Introduction to Java Programming";
                img = "../books/introtojava.jpg";
                break;
            case('introtophysicalanthropology'):
                name = "Introduction to Physical Anthropology";
                img = "../books/introtophysicalanthropology.jpg";
                break;
            case('introtosociology'):
                name = "Introduction to Sociology";
                img = "../books/introtosociology.jpg";
                break;
            case('IzukuMidoriya'):
                name = "Izuku Midoriya Figure";
                img = "../toys/IzukuMidoriya.jpg";
                break;
            case('McFarlane'):
                name = "Ochaco Uraraka Figure";
                img = "../toys/McFarlane.jpg";
                break;
            case('python'):
                name = "Python Crash Course";
                img = "../books/python.jpg";
                break;
            case('websiteplayground'):
                name = "Web Design Playground";
                img = "../books/websiteplayground.jpg";
                break;
            case('whitecollarcrimebook'):
                name = "Trusted Criminals";
                img = "../books/whitecollarcrimebook.jpg";
                break;
        };

        var cartContent = '<img class="cartimg" src="'+ img +'"> \
        <h2>'+ name +'</h2>\
        <h2>' + quantity[i] + '</h2>\
        <button type="button" onclick="">Remove From Cart</button>';

        cartRow.innerHTML = cartContent;
        cart.append(cartRow);
    }

}