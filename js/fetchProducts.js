
var productDetails;
var milkChocolatesList,darkChocolatesList,nutChocolatesList,brittleChocolatesList,truffleChocolatesList,giftChocolatesList,holidayChocolatesList,allChocolates;
var cart,randomCho ;
var myCartFromCookies;
$(document).ready(function() {
$('.container-fluid').css('padding','0px');
// $('.navbar').next('div').removeClass('.container-fluid');
  var quantityPrior='',quantityNow='';
  productDetails = new Array();
  milkChocolatesList="",darkChocolatesList="",nutChocolatesList="",brittleChocolatesList="",truffleChocolatesList="",giftChocolatesList="",holidayChocolatesList="",allChocolates="";
  cart= new shopping_cart("jadrn013");
  myCartFromCookies=cart.getCartArray();
  changeCartValue();

  $.get('/perl/jadrn000/proj4/get_products.cgi', storeData);

  function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length-1; i++) {
      innerArray = explodeArray(tmpArray[i],'|');
      productDetails[i] = innerArray;

    }
    segregateChocolates(); // binding the segregateChocolates() function
    //checkCookiesTobuildCart();
    randomProducts();

  }



  function segregateChocolates() {
    var tmpString;
    for(var i=0; i < productDetails.length; i++) {

      tmpString="";
      tmpString+="<div class='col-md-4 needpadding'>";
      tmpString +="<div class='title'><h5>"+productDetails[i][2]+"</h5> <i class='fa fa-heart fa-inverse'></i></div>" ;
      tmpString += "<div class='headdiv'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
      productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
      " / >";
      tmpString +="<div class='bottom-left'>"+productDetails[i][1]+"</div></div>" ;
      tmpString +="<div class='bodydiv'><div class='shortDesc'>"+productDetails[i][3]+"</div>" ;
      tmpString +="<div class='longDesc'><p>"+productDetails[i][4] ;
      tmpString += "</p><a class='cartButton' data-toggle='tooltip' title='Add to Cart' product-id='"+ productDetails[i][0]+"' value='Add To Cart'><i class='fa fa-shopping-cart'"+
      " ></i></a>";
      tmpString +="<i class='fa fa-dollar pull-right'>"+" "+productDetails[i][6]+"</i>";
      tmpString += "</div></div></div>";
      allChocolates+=tmpString;
      if(productDetails[i][1] == "Milk chocolate") {
        milkChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Dark chocolate"){
        darkChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Nuts and chews"){
        nutChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Brittles and toffies"){
        brittleChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Truffles"){
        truffleChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Gifts"){
        giftChocolatesList+=tmpString;
      }
      else if(productDetails[i][1] == "Holiday assortments"){
        holidayChocolatesList+=tmpString;
      }

    }
    // christmasProducts();
    $('#content').html(allChocolates);
    // CartClickBind();
  }

  function randomProducts() {
    // referred https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
    //to understand random number generation in javascript
    tmpString="";
    var arr = [];
    while(arr.length < 3){
      var randomnumber = Math.floor(Math.random()*productDetails.length) + 1;
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
      //console.log(arr);
    }
    for(var i=0;i<arr.length;i++){

      tmpString+="<div class='col-md-4 needpadding'>";
      tmpString +="<div class='title'><h5>"+productDetails[arr[i]][2]+"</h5>  <i class='fa fa-heart fa-inverse'></i></div>" ;
      tmpString += "<div class='headdiv'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
      productDetails[arr[i]][0]+".jpg\" alt=\""+productDetails[arr[i]][2]+"\""+
      " / >";
      tmpString +="<div class='bottom-left'>"+productDetails[arr[i]][1]+"</div></div>" ;
      tmpString +="<div class='bodydiv'><div class='shortDesc'>"+productDetails[i][3]+"</div>" ;

      tmpString += "<a class='cartButton' data-toggle='tooltip' title='Add to Cart' product-id='"+ productDetails[arr[i]][0]+"' value='Add To Cart'><i class='fa fa-shopping-cart'"+
      " ></i></a>";
      tmpString +="<i class='fa fa-dollar pull-right'>"+" "+productDetails[arr[i]][6]+"</i>";
      tmpString += "</div></div></div>";

    }
    randomCho=tmpString;
        $('#threeRandomProducts .col-md-9').html(randomCho);
  CartClickBind();
  }

  // function christmasProducts() {
  //
  //     // referred https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  //     //to understand random number generation in javascript
  //     tmpString="";
  //     var arr = [];
  //     //console.log(holidayChocolatesList);
  //
  //     while(arr.length < 3){
  //       var randomnumber = Math.floor(Math.random()*holidayChocolatesList.length) + 1;
  //       if(arr.indexOf(randomnumber) > -1) continue;
  //       arr[arr.length] = randomnumber;
  //       //console.log(arr);
  //     }
  //     for(var i=0;i<arr.length;i++){
  //
  //       tmpString+="<div class='col-md-4 needpadding'>";
  //       tmpString +="<div class='title'><h5>"+holidayChocolatesList[arr[i]][2]+"</h5></div>" ;
  //       tmpString += "<div class='headdiv'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       holidayChocolatesList[arr[i]][0]+".jpg\" alt=\""+holidayChocolatesList[arr[i]][2]+"\""+
  //       " / >";
  //       tmpString +="<div class='bottom-left'>"+holidayChocolatesList[arr[i]][1]+"</div></div>" ;
  //       tmpString +="<div class='bodydiv'><div class='shortDesc'>"+holidayChocolatesList[i][3]+"</div>" ;
  //
  //       tmpString += "<a class='cartButton' data-toggle='tooltip' title='Add to Cart' product-id='"+ holidayChocolatesList[arr[i]][0]+"' value='Add To Cart'><i class='fa fa-shopping-cart'"+
  //       " ></i></a>";
  //       tmpString +="<i class='fa fa-dollar pull-right'>"+" "+holidayChocolatesList[arr[i]][6]+"</i>";
  //       tmpString += "</div></div></div>";
  //
  //     }
  //     $('#christmasProducts3Special .col-md-9').html(tmpString);
  //   CartClickBind();
  //
  //
  // }

  $('#milk').on('click', function() {
    $('#content').html(milkChocolatesList);
    CartClickBind();
  });
  $('#dark').on('click', function() {
    $('#content').html(darkChocolatesList);
    CartClickBind();
  });
  $('#nuts').on('click', function() {
    $('#content').html(nutChocolatesList);
    CartClickBind();
  });
  $('#brittle').on('click', function() {
    $('#content').html(brittleChocolatesList);
    CartClickBind();
  });
  $('#truffles').on('click', function() {
    $('#content').html(truffleChocolatesList);
    CartClickBind();
  });
  $('#gifts').on('click', function() {
    $('#content').html(giftChocolatesList);
    CartClickBind();
  });
  $('#holidayAssortments').on('click', function() {
    $('#content').html(holidayChocolatesList);
    CartClickBind();
  });



  // $('#content').on('click',$('a'), function(e) {
  //     if($(e.target).val() != 'Add to Cart') return;
  //     alert("The SKU is " + $(e.target).attr("product-id"));
  //     });


  // $(document).on('click', ".buy", function() {
  //   var sku = this.id;
  //   cart.add(sku,1);
  //   $(this).next().fadeIn(50).fadeOut(2000);
  // });
  $('[data-toggle="tooltip"]').tooltip();

});




// from http://www.webmasterworld.com/forum91/3262.htm
function explodeArray(item,delimiter) {
  tempArray=new Array(1);
  var Count=0;
  var tempString=new String(item);
  while (tempString.indexOf(delimiter)>0) {
    tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
    tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
    Count=Count+1
  }
  tempArray[Count]=tempString;
  return tempArray;
}
