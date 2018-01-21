
var orderSummary;
$(document).ready(function() {

      $('#productButton').on('click',function() {
  $('#content').html(allChocolates);
        $('#productPage').css('display','block');
        $('#productPage').siblings().css('display','none');
        $('input:radio[name=category]').each(function () { $(this).prop('checked', false); });
$('.container-fluid').css({'padding-right':'15px','padding-left':'15px'});
       CartClickBind();
      });
      $('#aboutUsButton').on('click',function() {
        $('#aboutUsPage').css('display','block');
        $('#aboutUsPage').siblings().css('display','none');
$('.container-fluid').css({'padding-right':'15px','padding-left':'15px'});
      });
      $('#contactButton').on('click',function() {
        $('#contactPage').css('display','block');
        $('#contactPage').siblings().css('display','none');
  $('.container-fluid').css('padding','0px');
      });
      $('#homeButton').on('click',function() {
        $('#threeRandomProducts .col-md-9').html(randomCho);
         CartClickBind();
        $('#homePage').css('display','block');
        $('#homePage').siblings().css('display','none');
$('.container-fluid').css('padding','0px');
      });
      $('.cart').on('click',function() {

        makeMyCart();
        $('.paymentButton button').show();

       $('.totalPayableParent h3').html($('.totalPayableParent h3').html().replace("Amount Paid", "Payable Amount"))  ;
           $('.cartProduct h3').html('My Cart');
        $('#cartPage').css('display','block');
        $('#cartPage').siblings().css('display','none');
        $('.afterOrderconfirmation').hide();
$('.qty').show();
$('.container-fluid').css({'padding-right':'15px','padding-left':'15px'});

      });


      // function addToCart() {
      //   $('.cartButton').on('click',function(e) {
      //     //console.log($(this).closest($('.needpadding')).html());
      //       // //console.log($(this).parents());
      // var t=$(this).attr('product-id');
      // alert(t);
      //   });
      // }
});
