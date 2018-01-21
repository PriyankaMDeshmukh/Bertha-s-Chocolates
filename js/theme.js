$(document).ready(function() {

  $('.catPlus').click(function() {
    $('.catMinus').show();
    $('.catPlus').hide();
    $('.checkboxForCategory').show();
  });

  $('.catMinus').click(function() {
    $('.catPlus').show();
    $('.catMinus').hide();
    $('.checkboxForCategory').hide();
  });

  $("input[name='sameAdd']").change(function(){
    var sameAdd = $("input[name=sameAdd]:checked").val();
    if(sameAdd=='yes'){

      $(".shipping").hide();
    }
    else if(sameAdd=='no'){

      $(".shipping").show();
    }
  });

$('.allOurProducts').click(function () {
$('#productButton').trigger('click');
});
$('.darkChocolates').click(function () {
$('#productButton').trigger('click');
$('#dark').trigger('click');
});




});
function cartEmptyOrNot( totalPayable) {


  //console.log(totalPayable);
  if($('.cartProduct .needpadding')[0]==undefined){
  $('#cartPage .emptycart').show();
    $(".cartProduct").css('width','84%');
    $(".summary").hide();
  }
  else{
    $(".cartProduct").css('width','50%');
$('#cartPage .emptycart').hide();
    $('.cartTotal').html((totalPayable).toFixed(2));
    $('.tax').html((totalPayable*8/100).toFixed(2));
    $('.totalPayable').html((parseFloat((totalPayable))+parseFloat((totalPayable*8/100))+2.0).toFixed(2));
        $(".summary").show();

  }
}
