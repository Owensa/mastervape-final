//declaring global cart variable
var cart = null;

//Creates a cart for each client that visits the site. Called after onload()
function setUpNewCartInstance() {

    if(cart === null)
    {
      //creating the cart structure,
      cart = {
        id: generateUniqueCartID(),
        contents: new Array()
      };

      //creating cart instance.
      cart = this.cart;
      //generating id.

      return cart;

    } else {
      //if cart != null, then there is already an existing cart in the client browsers cookies/cache so break.
      return 1;
      console.log("A cart already exists, a new cart was not instantiated." + this.cart.id);
    }
    console.log("cart successfully created. new cart id" + this.cart.id);
}

function addItemToCart(cart, product) {
    //creating a client side copy of the product that exists in the moltin database.
    var cProduct = createClientSideProduct();
    //adds the client side copy of the product to the cart object.
    cart.contents.push(cProduct);
}

function createClientSideProduct() {
  var product = {
      itemName:                document.GetElementByClassName('product-name'),
      price:                   document.GetElementByClassName('product-price'),
      modifiers:               document.GetElementByClassName('product-description').getAttribute('aria-label'),
      description:             document.GetElementByClassName('product-description'),
      img:                     document.GetElementByClassName('background-image')
  };

  console.log("test product dispaly"+ this.product);

}
