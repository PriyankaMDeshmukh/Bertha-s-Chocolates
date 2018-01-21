 // var shipaddress1,card;
$(document).ready(function() {

  // validation for all required fields - give error message in span
  $(".required").blur(function () {
    length = $(this).val().trim().length;
    if(length==0)
    $(this).next('span').show();
    else {
      $(this).next('span').hide();
    }
  });


  $('.requiredDropDown').change(function () {
    if(  $(this).val()!="" ){
      $(this).next('span').hide();
    }
    else{
      $(this).next('span').show();
    }
  });

  $('.requiredDropDown').on("focus blur",function () {
    if(  $(this).val()=="" ){
      $(this).next('span').show();
    }
  });

  //zip should be number
  $('#zip').keydown(function(key) {
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
    if(key.keyCode>95&&key.keyCode<106) return true;
    if(key.keyCode < 48 || key.keyCode > 57) return false;
  });

  $("#zip").blur(function () {
    validateZip();
  });

  function validateZip() {

    if($('#zip').val().replace(/[^0-9]/g,"").length==5){
      $(".validZip").hide();
      $("#zip+span").hide();
      return true;
    }

    if($('#zip').val().replace(/[^0-9]/g,"").length!=5 && $("#zip").val().length!=0){
      $("#zip+span").hide();
      $(".validZip").show();
      return false;
    }

    if($("#zip").val().length==0){
      $("#zip+span").show();
      return false;
    }

  }
  // phone number shoud be number and in correct format

  $('#phone').keydown(function(key) {
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
    if(key.keyCode==8||key.keyCode==46||key.keyCode==189||key.keyCode==173) return true;
    if(key.keyCode>95&&key.keyCode<106) return true;
    //enable arrows and delete backspace
    if(key.keyCode < 48 || key.keyCode > 57) return false; //allow only numbers
  });

  $('#phone').blur(function () {
    validatePhone();
  });


  function validatePhone() {
    //console.log("phone");
    $("#phone").siblings('span').hide();
    $("#phone").next('span').next('span').hide();
    // $('.invalidPhone').hide();
    phoneNumber  = $('#phone').val().length;
    if(phoneNumber==0){
      //console.log("phone");
      //console.log(  $(this).next('span').show());
      $("#phone").next('span').show();
      // $(this).next('span').next('span').show();
      // $('.invalidPhone').hide();
      return false;
    }
    else{
      //console.log("phone");
      var phoneRegex = new RegExp(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/);
      var userPhone =$("#phone").val();
      if (!phoneRegex.test(userPhone)&phoneRegex.length!=0) {
        //console.log("phone93");
        $("#phone").next('span').next('span').show();
        // $(".invalidPhone").show();
        return false;
      }
      else if($('#phone').val().replace(/[^0-9]/g,"").length==10){
        //console.log("phone99");
        $("#phone").siblings('span').hide();
        $("#phone").next('span').next('span').hide();
        // $('.invalidPhone').hide();
        return true;
      }
    }
    return true;
  }







  $('#shipzip').keydown(function(key) {
    //console.log("hey");
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
    if(key.keyCode>95&&key.keyCode<106) return true;
    if(key.keyCode < 48 || key.keyCode > 57) return false;
  });

  $("#shipzip").blur(function () {
    validateShipZip();
  });

  function validateShipZip() {

    if($('#shipzip').val().replace(/[^0-9]/g,"").length==5){
      $(".shipinvalidZip").hide();
      $("#shipzip+span").hide();
      return true;
    }

    if($('#shipzip').val().replace(/[^0-9]/g,"").length!=5 && $("#zip").val().length!=0){
      $("#shipzip+span").hide();
      $(".shipinvalidZip").show();
      return false;
    }

    if($("#shipzip").val().length==0){
      $("#shipzip+span").show();
      return false;
    }

  }

  $('#shipphone').keydown(function(key) {
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
    if(key.keyCode==8||key.keyCode==46||key.keyCode==189||key.keyCode==173) return true;
    if(key.keyCode>95&&key.keyCode<106) return true;
    //enable arrows and delete backspace
    if(key.keyCode < 48 || key.keyCode > 57) return false; //allow only numbers
  });

  $('#shipphone').blur(function () {
    validatePhoneShip();
  });

  function validatePhoneShip() {
    //console.log("phone");
    $("#shipphone").siblings('span').hide();
    $("#shipphone").next('span').next('span').hide();
    // $('.invalidPhone').hide();
    phoneNumber  = $('#shipphone').val().length;
    if(phoneNumber==0){
      //console.log("phone");
      //console.log(  $(this).next('span').show());
      $("#shipphone").next('span').show();
      // $(this).next('span').next('span').show();
      // $('.invalidPhone').hide();
      return false;
    }
    else{
      //console.log("phone");
      var phoneRegex = new RegExp(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/);
      var userPhone =$("#shipphone").val();
      if (!phoneRegex.test(userPhone)&phoneRegex.length!=0) {
        //console.log("phone93");
        $("#shipphone").next('span').next('span').show();
        // $(".invalidPhone").show();
        return false;
      }
      else if($('#shipphone').val().replace(/[^0-9]/g,"").length==10){
        //console.log("phone99");
        $("#shipphone").siblings('span').hide();
        $("#shipphone").next('span').next('span').hide();
        // $('.invalidPhone').hide();
        return true;
      }
    }
    return true;
  }





  //Shipping option selected?
  $("input[name='sameAdd']").change(function(){
    var sameAdd = $("input[name=sameAdd]:checked").val();
    if(sameAdd=='yes'||sameAdd=='no'){
      $(".addNoSel").hide();
    }
    else{
      $(".addNoSel").show();
    }
  });

  //card type  selected?
  $("input[name='card']").change(function(){
    var sameAdd = $("input[name=card]:checked").val();
    if(sameAdd!=''||sameAdd!='undefined'){
      $(".card").hide();
    }
    else{
      $(".card").show();
    }
  });

  //card number should be number
  $('#cardNo').keydown(function(key) {
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39) return true;
    if(key.keyCode>95&&key.keyCode<106) return true;
    if(key.keyCode < 48 || key.keyCode > 57) return false;
  });

  $("#cardNo").blur(function () {
    validateCardNo();
  });

  function validateCardNo() {

    if($('#cardNo').val().replace(/[^0-9]/g,"").length==16){
      $(".invalidCardNo").hide();
      $("#cardNo+span").hide();
      return true;
    }

    if($('#cardNo').val().replace(/[^0-9]/g,"").length!=16 && $("#zip").val().length!=0){
      $("#cardNo+span").hide();
      $(".invalidCardNo").show();
      return false;
    }

    if($("#cardNo").val().length==0){
      $("#cardNo+span").show();
      return false;
    }

  }


  // dob should be in number and correct format
  $('#expDate').keydown(function(key) {
    $("#expDate+span").hide();
    $(".invalidDate").hide();
    if(key.keyCode>95&&key.keyCode<106) return true;
    if(key.keyCode==8||key.keyCode==46||key.keyCode==37||key.keyCode==39||key.keyCode==191) return true;
    //if(key.keyCode==8||key.keyCode==46) return true;
    expDate= $('#expDate').val().length;
    if(expDate==2){
      $('#expDate').val(  $('#expDate').val()+"/");
    }
    if(key.keyCode < 48 || key.keyCode > 57) return false;
  });

  $("#expDate").blur(function () {
    validateexpDate();
  });

  function validateexpDate() {
    $("#expDate+span").hide();
    $(".invalidDate").hide();
    if ($('#expDate').val().length==5) {
      if($('#expDate').val().substring(2, 3)==='/'){
        if($('#expDate').val().substring(0, 2)<0||$('#expDate').val().substring(0, 2)>12){
          //error
          $(".invalidDate").show();
          return false;
        }
        else if($('#expDate').val().substring(3, 5)<17){
          $(".invalidDate").show();
          return false;
        }
      }
      else{
        return true;
      }
    }
    else if($('#expDate').val().length<5&&$('#expDate').val().length!=0){
      $(".invalidDate").show();
      return false;
    }
    return true;
  }



  function clearErrors() {
    $(".required+span,.requiredDropDown+span").css("display","none");
    $(".ageLimit").hide();
    $(".invalidDob").hide();
    $('.invalidPhone').hide();
    $(".genderNotSel").hide();
    $(".validZip").hide();
    $(".invalidEmail").hide();
    $(".noUpload").hide();
    $(".invalidFile").hide();
    $(".size").hide();
    $(".dubPhone").hide();
    $(".dubEmail").hide();
  }

  $('#myModal').on('hidden.bs.modal', function () {
    $('#reset').trigger("click");
    $('.shipping').hide();
  });

  // clear all error and data
  $('#reset').click(function () {
    $(".required+span,.requiredDropDown+span").css("display","none");
    $(".addNoSel").hide();
    $(".invalidCardNo").hide();
    $('.card').hide();
    $(".invalidDate").hide();
  });

  $("#getting-started button").click(function () {
    $('#reset').trigger("click");
  });


  $(document).on('click', '#submit',function (e) {
    clearErrors();
    if($("#fname").val().trim()==""){
      $("#fname+span").show();
      //console.log("name");
      return false;
    }
    else if($("#lname").val().trim()==""){
      $("#lname+span").show();
      return false;
    }
    else if($("#address1").val().trim()==""){
      $("#address1+span").show();
      return false;
    }
    else if($("#city").val().trim()==""){
      $("#city+span").show();
      return false;
    }
    else if($("#state").val().trim()==""){
      $("#state+span").show();
      return false;
    }
    else if($("#zip").val().trim()==""){
      $("#zip+span").show();
      return false;
    }
    else if(!validateZip()){
      return false;
    }
    else if($("#phone").val().trim()==""){

      $("#phone+span").show();
      return false;
    }
    else if(!validatePhone()){
      return false;
    }
    else if (!$("input[name='sameAdd']:checked").val()){
      $(".addNoSel").show();
      return false;
    }
    else if($("input[name='sameAdd']:checked").val()=='no'){
      if($("#shipfname").val().trim()==""){
        $("#shipfname+span").show();
        //console.log("name");
        return false;
      }
      else if($("#shiplname").val().trim()==""){
        $("#shiplname+span").show();
        return false;
      }
      else if($("#shipaddress1").val().trim()==""){
        $("#shipaddress1+span").show();
        return false;
      }
      else if($("#shipcity").val().trim()==""){
        $("#shipcity+span").show();
        return false;
      }
      else if($("#shipstate").val().trim()==""){
        $("#shipstate+span").show();
        return false;
      }
      else if($("#shipzip").val().trim()==""){
        $("#shipzip+span").show();
        return false;
      }
      else if(!validateShipZip()){
        $(".shipinvalidZip").show();
        return false;
      }
      else if($("#shipphone").val().trim()==""){

        $("#shipphone+span").show();
        return false;
      }
      else if(!validatePhoneShip()){
        return false;
      }

      else if (!$("input[name='card']:checked").val()) {
        $(".card").show();
        return false;
      }
      else if($("#cardNo").val().trim()==""){
        $("#cardNo+span").show();
        return false;
      }

      else if(!validateCardNo()){
        return false;
      }
      else if($("#expDate").val().trim()==""){
        $("#expDate+span").show();
        return false;
      }


      else if(!validateexpDate()){
        return false;
      }
    }
    else if (!$("input[name='card']:checked").val()) {
      $(".card").show();
      return false;
    }
    else if($("#cardNo").val().trim()==""){
      $("#cardNo+span").show();
      return false;
    }

    else if(!validateCardNo()){
      return false;
    }
    else if($("#expDate").val().trim()==""){
      //console.log("adas");
      $("#expDate+span").show();
      return false;
    }
    else if(!validateexpDate()){
      return false;
    }
    var shipaddress1,card,card4;
if($('#shipaddress1').val()=='undefined'||$('#shipaddress1').val()==''){
  shipaddress1= $('#address1').val();
}
  else{
    shipaddress1= $('#shipaddress1').val();
  }
 card=$('#cardNo').val();
 card4 = card.substr(card.length - 4);
 //console.log(card4);
    e.preventDefault();
    $.get('/perl/jadrn013/orderDetails.cgi', function () {
      orderSummary=$('#cartPage').html();
      document.cookie = this.owner + "= ;expires=-1;path=/";
      cart= new shopping_cart("jadrn013");
      $('#closeMyModal').trigger('click');
      $('.paymentButton button').hide();
      $('.fa-times').hide();
      $('.quantityButton').hide();
      $('.totalPayableParent h3').html($('.totalPayableParent h3').html().replace("Payable Amount", "Amount Paid"))  ;
      $('.cartProduct h3').html('Order History');
      $('.minicart').html("0");
      $('.afterOrderconfirmation .cardused h3 span').html('  XXXXXXXXXXXX'+card4);
      $('.afterOrderconfirmation .address p').html(shipaddress1);
      $('.afterOrderconfirmation').show();
        $('.qty').hide();

    });
  });
});
