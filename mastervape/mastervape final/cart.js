//returns an array of the current contents in a cart per user session
function getCartContents() {
        var contents = moltin.Cart.Contents();
        return contents;
}

//script is called when the "add to cart" button is pressed.
function addItemtoCart(productName, quantity = 1, modifiers = null) {
      if(modifiers.length === 0 || modifiers === null) {
        moltin.Cart.Insert(productName, quantity);
      } else {
        moltin.Cart.Insert(productName, quantity, modifiers);
      }
}

//starts the stripe checkout process
function convertCartToOrder() {
    moltin.Cart.Complete({
      customer: {
        first_name:     '',
        last_name:      '',
        email_name:     ''
      },
      shipping: '',
      gateway:  ''
      bill_to {
        first_name:   '',
        last_name:    '',
        address_1:    '',
        city:         '',
        country:      '',
        postcode:     '',
        phone:        ''
      },
      ship_to: '',
    }, function(order) {
        console.log(order);
    });
}

//pass stripe the credit card information
function pushPaymentInfoToStripe(number, expiryMonth, expiryYear, cvv) {
    moltin.Checkout.Payment('purchase', order.id, {
      data: {
        first_name: '',
        last_name: '',
        number: '',
        expiry_month: '',
        expiry_year: '',
        cvv: ''
      }
    }, function(payment) {
      //redirect to success page.
    }, function(error) {
        alert("There was an error. Please try again.");
    });
}

//delete the current cart
function deleteCart() {
   moltin.Cart.Delete();
}
