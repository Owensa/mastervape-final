//create a new customer in the moltin database when a new client visits the site
function createCustomer() {
  var customerId = generateUniqueID();
//  moltin.Customer.Create({ title: customerId, slug: customerId, status: 1, description: 'A customer.' });
  console.log(customerId);
}

//creates new cart identifier when client connects to the website.
function generateUniqueID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
