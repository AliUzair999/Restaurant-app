// INDEX .HTML

// function goUserSignin() {
//     location.href = "./user_signin.html"
// }

// function goVendorSignin() {
//     location.href = "./vendor_signin.html"
// }







// User Side

var users = [];
var currentUser = {};


// User Sign Up Page



function userSignup() {
    let userSignupName = document.getElementById('userSignupName')
    let userSignupEmail = document.getElementById('userSignupEmail')
    let userSignupPassword = document.getElementById('userSignupPassword')

    let totalusers = JSON.parse(localStorage.getItem("users"));
    let userSignupEmailApproved = true;
    let userSignupPasswordLower = false;
    let userSignupPasswordCapital = false;
    let userSignupPasswordNumber = false;
    let userSignupPasswordApproved = false;


    // console.log(typeof(totalusers))
    // console.log(totalusers)
    // console.log(totalusers.length)
    // if (totalusers != null) {
    //     console.log("if chala")
    //     for (var i = 0; i < totalusers.length; i++ ) {
    //         console.log("for chala" + i)

    //         if (totalusers[i].userEmail === userSignupEmail) {
    //             console.log(totalusers[i].userEmail)

    //             userSignupEmailApproved = false
    //             alert("Username Already exists")
    //             break
    //         }
    //         console.log("for chala" + i)
    //     }
    // }
    // else{
    //     console.log("ellse chala")
    // }

    if (userSignupEmailApproved === true) {
        if (userSignupPassword.value.length >= 6) {
            if (userSignupPassword.value[0].charCodeAt() >= 48 && userSignupPassword.value[0].charCodeAt() <= 57) {
                alert("Password can not start with a number")
                // console.log("num if chala")
            }
            else {
                for (var i = 0; i < userSignupPassword.value.length; i++) {
                    // console.log("i ki loop " + i)
                    if (userSignupPassword.value[i].charCodeAt() >= 97 && userSignupPassword.value[i].charCodeAt() <= 122) {
                        userSignupPasswordLower = true
                        // console.log("small mil gaya" + i)
                        for (var j = 0; j < userSignupPassword.value.length; j++) {
                            // console.log("j ki loop" + i + j)
                            if (userSignupPassword.value[j].charCodeAt() >= 65 && userSignupPassword.value[j].charCodeAt() <= 90) {
                                userSignupPasswordCapital = true;
                                // console.log("cap mil gaya" + i + j)
                                for (var k = 0; k < userSignupPassword.value.length; k++) {
                                    // console.log(`k ki loop ${i} ${j} ${k}`)
                                    if (userSignupPassword.value[k].charCodeAt() >= 48 && userSignupPassword.value[k].charCodeAt() <= 57) {
                                        userSignupPasswordNumber = true;
                                        userSignupPasswordApproved = true;
                                        break;
                                    }
                                    if (k == userSignupPassword.value.length - 1 && userSignupPasswordNumber == false) {
                                        console.log("Password mai num nhi")
                                        j = userSignupPassword.value.length
                                        i = userSignupPassword.value.length
                                    }
                                }
                            }
                            if (userSignupPasswordApproved === true) {
                                break;
                            }
                            if (j == userSignupPassword.value.length - 1 && userSignupPasswordCapital == false) {
                                i = userSignupPassword.value.length
                            }
                        }
                    }
                    if (userSignupPasswordApproved == true) {
                        break;
                    }
                    // console.log(userPassword[i])
                }

                if (userSignupPasswordLower == false) {
                    alert("Please enter atleat one lowercase character")
                }
                else if (userSignupPasswordCapital == false) {
                    alert("Please enter atleat one uppercase character")
                }
                else if (userSignupPasswordNumber == false) {
                    alert("Please enter atleat one number")
                }
            }

        }
        else {
            alert("minimun password length is 6 characters")
        }
    }


    if (userSignupEmailApproved === true && userSignupPasswordApproved == true) {
        if (totalusers == null) {
            console.log("if chala")
            let newUser = {
                "userNumber": "user" + 1,
                "userName": userSignupName.value,
                "userEmail": userSignupEmail.value,
                "userPassword": userSignupPassword.value
            }
            users.push(newUser)
        }
        else {
            console.log("else chala")
            users = totalusers;
            console.log(users)
            let newUser = {
                "userNumber": "user" + (users.length + 1),
                "userName": userSignupName.value,
                "userEmail": userSignupEmail.value,
                "userPassword": userSignupPassword.value
            }
            users.push(newUser)
        }
        userSignupName.value = ""
        userSignupEmail.value = ""
        userSignupPassword.value = ""
        localStorage.removeItem("users")
        localStorage.setItem("users", JSON.stringify(users))
        // console.log(users)
        location.href = "./user_signin.html"
        console.log(users)
    }
}

// User Sign in Page
function userSignin() {
    let userSigninEmail = document.getElementById('userSigninEmail')
    let userSigninPassword = document.getElementById('userSigninPassword')
    let userSigninEmailMatched = false;
    // let userSigninPasswordMatched = false;
    let totalusers = JSON.parse(localStorage.getItem("users"));
    // console.log(totalusers)

    for (let i = 0; i < totalusers.length; i++) {
        // console.log(i)
        if (totalusers[i].userEmail === userSigninEmail.value) {
            userSigninEmailMatched = true;
            if (totalusers[i].userPassword === userSigninPassword.value) {
                // console.log("done")
                // userSigninPasswordMatched = true;

                location.href = "./user_dashboard.html"
                currentUser = totalusers[i]
                console.log(currentUser)
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                break;
            }
            else {
                alert("Password Does not match")
                break
            }
        }
    }

    if (userSigninEmailMatched == false) {
        alert("No email found")
    }
}











// Vendor Side

var vendors = [];
var currentVendor = {};


// Vendor Sign Up Page



function vendorSignup() {
    let vendorSignupName = document.getElementById('vendorSignupName')
    let vendorSignupEmail = document.getElementById('vendorSignupEmail')
    let vendorSignupPassword = document.getElementById('vendorSignupPassword')

    let totalvendors = JSON.parse(localStorage.getItem("vendors"));
    let vendorSignupEmailApproved = true;
    let vendorSignupPasswordLower = false;
    let vendorSignupPasswordCapital = false;
    let vendorSignupPasswordNumber = false;
    let vendorSignupPasswordApproved = false;


    // console.log(typeof(totalusers))
    // console.log(totalusers)
    // console.log(totalusers.length)
    // if (totalusers != null) {
    //     console.log("if chala")
    //     for (var i = 0; i < totalusers.length; i++ ) {
    //         console.log("for chala" + i)

    //         if (totalusers[i].userEmail === userSignupEmail) {
    //             console.log(totalusers[i].userEmail)

    //             userSignupEmailApproved = false
    //             alert("Username Already exists")
    //             break
    //         }
    //         console.log("for chala" + i)
    //     }
    // }
    // else{
    //     console.log("ellse chala")
    // }

    if (vendorSignupEmailApproved === true) {
        if (vendorSignupPassword.value.length >= 6) {
            if (vendorSignupPassword.value[0].charCodeAt() >= 48 && vendorSignupPassword.value[0].charCodeAt() <= 57) {
                alert("Password can not start with a number")
                // console.log("num if chala")
            }
            else {
                for (var i = 0; i < vendorSignupPassword.value.length; i++) {
                    // console.log("i ki loop " + i)
                    if (vendorSignupPassword.value[i].charCodeAt() >= 97 && vendorSignupPassword.value[i].charCodeAt() <= 122) {
                        vendorSignupPasswordLower = true
                        // console.log("small mil gaya" + i)
                        for (var j = 0; j < vendorSignupPassword.value.length; j++) {
                            // console.log("j ki loop" + i + j)
                            if (vendorSignupPassword.value[j].charCodeAt() >= 65 && vendorSignupPassword.value[j].charCodeAt() <= 90) {
                                vendorSignupPasswordCapital = true;
                                // console.log("cap mil gaya" + i + j)
                                for (var k = 0; k < vendorSignupPassword.value.length; k++) {
                                    // console.log(`k ki loop ${i} ${j} ${k}`)
                                    if (vendorSignupPassword.value[k].charCodeAt() >= 48 && vendorSignupPassword.value[k].charCodeAt() <= 57) {
                                        vendorSignupPasswordNumber = true;
                                        vendorSignupPasswordApproved = true;
                                        break;
                                    }
                                    if (k == vendorSignupPassword.value.length - 1 && vendorSignupPasswordNumber == false) {
                                        console.log("Password mai num nhi")
                                        j = vendorSignupPassword.value.length
                                        i = vendorSignupPassword.value.length
                                    }
                                }
                            }
                            if (vendorSignupPasswordApproved === true) {
                                break;
                            }
                            if (j == vendorSignupPassword.value.length - 1 && vendorSignupPasswordCapital == false) {
                                i = vendorSignupPassword.value.length
                            }
                        }
                    }
                    if (vendorSignupPasswordApproved == true) {
                        break;
                    }
                    // console.log(userPassword[i])
                }

                if (vendorSignupPasswordLower == false) {
                    alert("Please enter atleat one lowercase character")
                }
                else if (vendorSignupPasswordCapital == false) {
                    alert("Please enter atleat one uppercase character")
                }
                else if (vendorSignupPasswordNumber == false) {
                    alert("Please enter atleat one number")
                }
            }

        }
        else {
            alert("minimun password length is 6 characters")
        }
    }


    if (vendorSignupEmailApproved === true && vendorSignupPasswordApproved == true) {
        if (totalvendors == null) {
            // console.log("if chala")
            let newVendor = {
                "vendorNumber": "vendor" + 1,
                "vendorName": vendorSignupName.value,
                "vendorEmail": vendorSignupEmail.value,
                "vendorPassword": vendorSignupPassword.value
            }
            vendors.push(newVendor)
        }
        else {
            // console.log("else chala")
            vendors = totalvendors;
            console.log(vendors)
            let newVendor = {
                "vendorNumber": "vendor" + (vendors.length + 1),
                "vendorName": vendorSignupName.value,
                "vendorEmail": vendorSignupEmail.value,
                "vendorPassword": vendorSignupPassword.value
            }
            vendors.push(newVendor)
        }
        vendorSignupName.value = ""
        vendorSignupEmail.value = ""
        vendorSignupPassword.value = ""
        localStorage.removeItem("vendors")
        localStorage.setItem("vendors", JSON.stringify(vendors))
        // console.log(vendors)
        location.href = "./vendor_signin.html"
        console.log(vendors)
    }
}

// Vendor Sign in Page


function vendorSignin() {
    let vendorSigninEmail = document.getElementById('vendorSigninEmail')
    let vendorSigninPassword = document.getElementById('vendorSigninPassword')
    let vendorSigninEmailMatched = false;
    // let vendorSigninPasswordMatched = false;
    let totalvendors = JSON.parse(localStorage.getItem("vendors"));
    // console.log(totalvendors)

    for (let i = 0; i < totalvendors.length; i++) {
        // console.log(i)
        if (totalvendors[i].vendorEmail === vendorSigninEmail.value) {
            vendorSigninEmailMatched = true;
            if (totalvendors[i].vendorPassword === vendorSigninPassword.value) {
                // console.log("done")
                // vendorSigninPasswordMatched = true;

                location.href = "./vendor_dashboard.html"
                currentVendor = totalvendors[i]
                console.log(currentVendor)
                localStorage.setItem('currentVendor', JSON.stringify(currentVendor))
                break;
            }
            else {
                alert("Password Does not match")
                break
            }
        }
    }

    if (VendorSigninEmailMatched == false) {
        alert("No email found")
    }
}




// Vendor Dashboard Page

let mainul = document.getElementById('MenuItems')

var checkMenuItems = JSON.parse(localStorage.getItem("menuItems"))

if (checkMenuItems === null) {
    var menuItems = [];
}
else {
    var menuItems = JSON.parse(localStorage.getItem("menuItems"))


}

vdItemName = document.getElementById("vdItemName")
vdItemPrice = document.getElementById("vdItemPrice")
vdIteDiscription = document.getElementById("vdIteDiscription")

function NewMenuItem(name, price, discription) {
    this.name = name;
    this.price = price;
    this.discription = discription;
    menuItems.push(this)
}

function addItem() {
    vdItemName.disabled = false;
    vdItemPrice.disabled = false;
    vdIteDiscription.disabled = false;
}

function saveItem() {
    vdItemName.disabled = true;
    vdItemPrice.disabled = true;
    vdIteDiscription.disabled = true;
    var saveNewItem = new NewMenuItem(vdItemName.value, vdItemPrice.value, vdIteDiscription)
    // console.log(saveNewItem)
    // console.log(menuItems)

    var itemli = document.createElement('li')
    var itemliValue = document.createTextNode(vdItemName.value)
    itemli.appendChild(itemliValue)
    mainul.appendChild(itemli)

    localStorage.removeItem("menuItems")
    localStorage.setItem("menuItems", JSON.stringify(menuItems))

    vdItemName.value = "";
    vdItemPrice.value = "";
    vdIteDiscription.value = "";
}




// User Dashboard 

console.log(menuItems)
// var userul = document.getElementById("userul")
// console.log(userul)

let utBody = document.getElementById("utBody")


// Add to Cart Functionality


function addOne(a) {
    b = a.parentNode.parentNode.childNodes[4]
    // console.log(b)
    bn = parseInt(b.innerText)
    // console.log(bn + 2 + 2)
    b.innerText = bn + 1
}

function lessOne(l) {
    b = l.parentNode.parentNode.childNodes[4]
    if (b.innerText == 0) {
        alert("can not be less than zero")
    }
    else {
        bn = parseInt(b.innerText)
        b.innerText = bn - 1
    }
}

var cart = [];
function CartItem(name, price, qty) {
    this.name = name
    this.price = price
    this.qty = qty
    this.total = price * qty
    cart.push(this)
}
function addCart(c) {
    var cQty = c.parentNode.parentNode.childNodes[4]
    var cQtyP = parseInt(cQty.innerText)
    if (cQtyP <=0) {
        alert("Please add atleast one item to add in the cart")
    }
    else {
        var cName = c.parentNode.parentNode.childNodes[0]
        // console.log(cName)
        var cPrice = c.parentNode.parentNode.childNodes[1]
        var cPriceP = parseInt(cPrice.innerText)
        var newItem = new CartItem(cName.innerText, cPriceP, cQtyP)
        console.log(cart)
        localStorage.removeItem(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("item added")
        document.getElementById("checkoutBtn").disabled = false;
    }
}

function checkout() {
    location.href = "./checkout.html"
}

function remItem(r) {
    // console.log(r.parentNode.parentNode)
    totalBR = r.parentNode.parentNode.childNodes[4]
    totPrice = totPrice - totalBR.innerText
    rTR = r.parentNode.parentNode
    tableLength = rTR.parentNode.childNodes.length
    rTRTotal = rTR.parentNode.childNodes[5].childNodes[tableLength-2]
    console.log(rTRTotal)
    rTRTotal.innerText = totPrice
    rTR.remove()
    // r = document.getElementById
}




























