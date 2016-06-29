function onSearchExecution(input) {
        //authenticate with moltin with limited user priveleges
        var moltin = new Moltin({publicId: 'B9zkGefy2G02dkN0GNj3EemZNoVMJR3dDebwOtbGZr'});
        moltin.Authenticate(function() {
          var result = moltin.Product.Search({title: input.value.toString()}, function(error) {
                console.log(input.value);
                if(result != null) {
                  console.log(result);
                  console.log(error);
                  alert("The item is not available!");
                }

              });
         });
}
