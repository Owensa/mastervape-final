var customerCounter = 0;

function createNewCustomer() {
    moltin.Customer.Create([
      title:            => 'customer',
      slug:             => 'customer' + customerCounter,
      status:           => 1,
      description:      => '',
      email:            => email.value,
      first_name:       => firstName.value, 
      last_name:        => lastName.value
    ]);

    customerCounter += 1;
}
