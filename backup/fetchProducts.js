
var productDetails;
var milkChocolatesList,darkChocolatesList,nutChocolatesList,brittleChocolatesList,truffleChocolatesList,giftChocolatesList,holidayChocolatesList,allChocolates;
$(document).ready(function() {
  productDetails = new Array();
  milkChocolatesList="",darkChocolatesList="",nutChocolatesList="",brittleChocolatesList="",truffleChocolatesList="",giftChocolatesList="",holidayChocolatesList="",allChocolates="";
  $.get('/perl/jadrn000/proj4/get_products.cgi', storeData);
  console.log(productDetails);
  function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length-1; i++) {
      innerArray = explodeArray(tmpArray[i],'|');
      productDetails[i] = innerArray;

    }
    segregateChocolates();
  }

  var cart = new shopping_cart("jadrn013");


function segregateChocolates() {
  var tmpString;
    for(var i=0; i < productDetails.length; i++) {
      console.log("in");
      tmpString="";
      tmpString+="<div class='col-md-4 needpadding'>";
      tmpString +="<div class='title'><h5>"+productDetails[i][2]+"</h5></div>" ;
      tmpString += "<div class='headdiv'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
      productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
      " />";
      tmpString +="<div class='bottom-left'>"+productDetails[i][1]+"</div></div>" ;
      tmpString +="<div class='bodydiv'><div class='shortDesc'>"+productDetails[i][3]+"</div>" ;
      tmpString +="<div class='longDesc'><p>"+productDetails[i][4] ;
      tmpString += "</p><a class='cartButton'><i class='fa fa-shopping-cart'"+
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

}


$('#milk').on('click', function() {
  $('#content').html(milkChocolatesList);
});
$('#dark').on('click', function() {
  $('#content').html(darkChocolatesList);
});
$('#nuts').on('click', function() {
  $('#content').html(nutChocolatesList);
});
$('#brittle').on('click', function() {
  $('#content').html(brittleChocolatesList);
});
$('#truffles').on('click', function() {
  $('#content').html(truffleChocolatesList);
});
$('#gifts').on('click', function() {
  $('#content').html(giftChocolatesList);
});
$('#holidayAssortments').on('click', function() {
  $('#content').html(holidayChocolatesList);
});




  //
  // $('#milk').on('click', function() {
  //
  //   tmpString = "";
  //
  //   for(var i=0; i < productDetails.length; i++) {
  //
  //     if(productDetails[i][1] == "Milk chocolate") {
  //       tmpString+="<div class='col-md-4 needpadding'>";
  //       tmpString +="<div class='title'><h5>"+productDetails[i][2]+"</h5></div>" ;
  //       tmpString += "<div class='headdiv'><img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " />";
  //       tmpString +="<div class='bottom-left'>"+productDetails[i][1].toUpperCase()+"</div></div>" ;
  //       tmpString +="<div class='bodydiv'><div class='shortDesc'>"+productDetails[i][3]+"</div>" ;
  //       tmpString +="<div class='longDesc'><p>"+productDetails[i][4] ;
  //       tmpString += "</p><a class='cartButton'><i class='fa fa-shopping-cart'"+
  //       " ></i></a>";
  //       tmpString +="<i class='fa fa-dollar pull-right'>"+" "+productDetails[i][6]+"</i>";
  //       tmpString += "</div></div></div>";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  //   console.log(tmpString);
  // });
  // $('#dark').on('click', function() {
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Dark chocolate") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' value='Add To Cart'"+
  //       "class='buy' id='" + productDetails[i][0]+"' />";
  //       tmpString += "<span>Added to Cart</span><br />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //
  // $('#nuts').on('click', function() {
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Nuts and chews") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' name="+productDetails[i][0]+
  //       " value='Add to Cart' /><br /><hr />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //
  // $('#brittle').on('click', function() {
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Brittles and toffies") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' name="+productDetails[i][0]+
  //       " value='Add to Cart' /><br /><hr />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //
  //
  // $('#truffles').on('click', function() {
  //
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Truffles") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' name="+productDetails[i][0]+
  //       " value='Add to Cart' /><br /><hr />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //
  //
  //
  // $('#gifts').on('click', function() {
  //
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Gifts") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' name="+productDetails[i][0]+
  //       " value='Add to Cart' /><br /><hr />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //
  //
  //
  //
  // $('#holidayAssortments').on('click', function() {
  //
  //   tmpString = "";
  //   for(var i=0; i < productDetails.length; i++) {
  //     if(productDetails[i][1] == "Holiday assortments") {
  //       tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
  //       productDetails[i][0]+".jpg\" alt=\""+productDetails[i][2]+"\""+
  //       " width=\"200px\"  /><br />";
  //       for(var j=0; j < productDetails[i].length; j++)
  //       tmpString += productDetails[i][j] + "<br />";
  //       tmpString += "<input type='button' name="+productDetails[i][0]+
  //       " value='Add to Cart' /><br /><hr />";
  //     }
  //   }
  //   var handle = document.getElementById('content');
  //   handle.innerHTML = tmpString;
  // });
  //


  $('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
    alert("The SKU is " + $(e.target).attr("name"));
  });

  $(document).on('click', ".buy", function() {
    var sku = this.id;
    cart.add(sku,1);
    $(this).next().fadeIn(50).fadeOut(2000);
  });


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
