
        window.onload = display();
        function display(){
                var items = [];
                var quantity = [];
    
                var allCookies = document.cookie.split(';');
                for (var i = 0; i < allCookies.length; i++) {
                    if (allCookies[i].indexOf("product") != -1) {
                        var match = allCookies[i].replace(" ", "");
                        items.push(match.substr(match.indexOf("=") + 1));
                    }
                }

                for (x of items) {
                    for (var i = 0; i < allCookies.length; i++) {
                        if ((allCookies[i].indexOf(x) != -1) && (allCookies[i].indexOf("product") == -1)) {
                            match = allCookies[i].replace(" ", "");
                            quantity.push(match.substr(match.indexOf("=") + 1));
                        }
                    }
                }

                var display = document.getElementById('checkoutdisplay');
                for (var i = 0; i < items.length; i++) {

                switch (items[i]) {
                    case ('AmericanDream'):
                        var content = `<p>Chasing the American Dream</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$9.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('deadpoolpikachu'):
                        var content = `<p>Deadpool Pikachu</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$19.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('doggycoin'):
                        var content = `<p>Doggy Coin</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$4.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('heroacademiavol1'):
                        var content = `<p>My Hero Academia vol. 1</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$9.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('introtojava'):
                        var content = `<p>Introduction to Java Programming</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$29.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('introtophysicalanthropology'):
                        var content = `<p>Introduction to Physical Anthropology</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$149.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                    break;
                    case ('introtosociology'):
                        var content = `<p>Introduction to Sociology</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$49.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('IzukuMidoriya'):
                        var content = `<p>Izuku Midoriya Figure</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$19.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('McFarlane'):
                        var content = `<p>Ochaco Uraraka Figure</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$19.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('python'):
                        var content = `<p>Python Crash Course</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$19.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('websiteplayground'):
                        var content = `<p>Web Design Playground</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$29.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                    case ('whitecollarcrimebook'):
                        var content = `<p>Trusted Criminals</p>
                        <input value="${quantity[i]}" id="checkoutquantity${i}" readonly></input>
                        <p>$69.99</p>`;
                        var row = document.createElement('div');
                        row.classList.add('checkoutrow');
                        row.innerHTML = content;
                        display.append(row);
                        break;
                };
            }
        }

function checkccnum(){
    var check = document.getElementById("cardnumber").value;
    if (!check.match(/\d{13,19}/)){
        document.getElementById("cardnumber").value = "";
        document.getElementById("cardnumber").style.border = "solid red 1px";
        return false;
    }
    document.getElementById("cardnumber").style.border = "";
    return true;
}

function checkmonth(){
    var check = document.getElementById("expmonth").value;
    if(check == ""){
        document.getElementById("expmonth").style.border = "solid red 1px";
        return false;
    }
    document.getElementById("expmonth").style.border = "";
    return true;
}

function checkyear(){
    var check = document.getElementById("expyear").value;
    if (!check.match(/\d{4}/)){
        document.getElementById("expyear").value = "";
        document.getElementById("expyear").style.border = "solid red 1px";
        return false;
    }
    document.getElementById("expyear").style.border = "";
    return true;
}

function checksecurity(){
    var check = document.getElementById("securitycode").value;
    if (!check.match(/\d{3,4}/)){
        document.getElementById("securitycode").value = "";
        document.getElementById("securitycode").style.border = "solid red 1px";
        return false;
    }
    document.getElementById("securitycode").style.border = "";
    return true;
}

function checkletters(id){
    var check = document.getElementById(id).value;
}

function checkaddress(){
    var check = document.getElementById("address").value;
}

function checkzip(){
    var check = document.getElementById("zip").value;
}

function checkphone(){
    var check = document.getElementById("phone").value;
}

function pay(){
    location.href="../index.html";
}