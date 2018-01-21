
function CartClickBind() {
//console.log("bind");
  $('#productPage .cartButton').on('click',function() {
    var sku=$(this).attr('product-id');
    //console.log(sku);
    cart.add(sku,1);
    changeCartValue();


    //cartEmptyOrNot();
  });
  $('#homePage .cartButton').on('click',function() {
    var sku=$(this).attr('product-id');
    //console.log(sku);
    cart.add(sku,1);
    changeCartValue();


    //cartEmptyOrNot();
  });
$('[data-toggle="tooltip"]').tooltip();

$('.fa-heart').click(function () {
  $(this).toggleClass('red');
});
}
function makeMyCart() {
  var totalPayable=0;
  myCartFromCookies=cart.getCartArray();
  var tmpString="<h3>My Cart</h3>";

  for(var j=0; j < myCartFromCookies.length; j++) {

    for(var i=0; i < productDetails.length; i++) {

      if(myCartFromCookies[j][0].indexOf(productDetails[i][0]) > -1  ){
      totalPayable+=myCartFromCookies[j][1]*productDetails[i][6];
        tmpString+="<div class='col-md-12 needpadding'>";
        tmpString +="<div><h5>"+productDetails[i][2]+"</h5></div>" ;
        tmpString += "<div class='row'>";
        tmpString += "<div class='headdiv col-md-6'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
        productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
        " / >";
        tmpString +="<div class='bottom-left'>"+productDetails[i][1]+"</div></div>" ;
        tmpString +="<div class='bodydiv col-md-6'><div class='shortDesc'>"+productDetails[i][3]+"</div>" ;
        tmpString +=""+productDetails[i][4] ;
        tmpString += "<div><a class='deleteButton'  product-id='"+ productDetails[i][0]+"'><i class='fa fa-times'"+
        " > Remove</i></a>";
        tmpString +="<i class='fa fa-dollar pull-right'>"+" "+productDetails[i][6]+"</i>";
          tmpString +="<p class='qty'>Qty:</p>";
      tmpString+="<input type='text' product-id='"+ productDetails[i][0]+"' class='quantityButton' value='"+myCartFromCookies[j][1]+"'>"
        // tmpString +="<p>"+myCartFromCookies[j][1]+"</p>";
        tmpString += "</div></div></div></div>";

      }
    }
  }


    $('.cartProduct').html(tmpString);
    cartEmptyOrNot(totalPayable);
    CartActivities();


}
function CartActivities(){
  $('.deleteButton').on('click', function() {
    //console.log($(this).attr('product-id'));
    cart.delete($(this).attr('product-id'));
      changeCartValue();
    makeMyCart();
  //  cartEmptyOrNot();
  });


  $('.quantityButton').focus(function() {
   quantityPrior = $(this).val();
  });
  $('.quantityButton').blur(function() {
    //console.log(quantityPrior);
   quantityNow = $(this).val();
   if(quantityNow==0||quantityNow<0){
//console.log($(this).siblings('.deleteButton'));
     $(this).siblings('.deleteButton').trigger('click');

   }
    if(quantityPrior!==(quantityNow)){
    cart.setQuantity($(this).attr('product-id'),quantityNow);
    //console.log(cart);
    changeCartValue();
    makeMyCart();
  }
});
$('.quantityButton').keydown(function(key) {
  if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
  if(key.keyCode>95&&key.keyCode<106) return true;
  if(key.keyCode < 48 || key.keyCode > 57) return false;
});
  // $('#quantityButton').on('click', function() {
  //   cart.setQuantity($('#sku').val(), $('#qty').val());
  //   makeMyCart();
  // });
}
function changeCartValue() {
  $('.minicart').html(cart.size());

}
