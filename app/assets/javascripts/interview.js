//fashion
$(document).ready(function(){

$("#search_submit").on("click", function(){
  var search = $("#search").val().trim().replace(/\s/g, '+')
  console.log(search)
  // $(".defaultShop").hide();

$.ajax({
  dataType: "json",
  url: "http://api.shopstyle.com/api/v2/products?pid=uid7524-34690218-36&fts=" + search + "&offset=0&limit=30",
  method: "GET"
}) .done(function(json) {
  $.each(json.products, function(index,item){
    $(".shop").append("<figure><a href=" + item.pageUrl + "><img src=" + item.image.sizes.Best.url + "></img></a><figcaption>" + item.priceLabel + item.brandedName + item.description + "</figcaption></figure>")
  });
});
});

$( ".fashionable").on("click", function() {
  console.log("button 1")
  $(".rubydiv").hide();
  $.ajax({
     dataType: "json",
      url: "https://api.pinterest.com/v1/boards/readysetprep/fashionable-interview-attire/pins?access_token=AWpsFBiCHYAcu15mAxj6h2h-BkWhFGSLUnqXuFFDRdlMEeBA0gAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cboard%2Coriginal_link",
      method: 'GET',
    }) .done(function(json) {
        $('.category-function-bar-items').append('<li id="fashionable">'+ json + '</li>');


   $.each(json.data, function(index,item) {
       $(".pintrestStuff").append("<figure><a href=" + item.url + "><img src=" + item.image.original.url + "></img></a><figcaption>" + item.note + "</figcaption></figure>")
  });
  });
});

$(".conservative").on("click", function() {
//conservative
  console.log("button 2")
  $(".rubydiv").hide();
     $.ajax({
         dataType: "json",
         url: "https://api.pinterest.com/v1/boards/readysetprep/conservative-interview-attire/pins?access_token=AWpsFBiCHYAcu15mAxj6h2h-BkWhFGSLUnqXuFFDRdlMEeBA0gAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cboard%2Coriginal_link",
         method: 'GET',
       }) .done(function(json) {
           $('.category-function-bar-items').append('<li id="conservative">' + json + '</li>');

           $.each(json.data, function(index,item) {
             $(".pintrestStuff").append("<figure><a href=" + item.url + "><img src=" + item.image.original.url + "></img></a><figcaption>" + item.note + "</figcaption></figure>")
           });
    });
});

$(".bizcas").on("click", function() {
//business casual
  console.log("button 3")
  $(".rubydiv").hide();
   $.ajax({
      dataType: "json",
       url: "https://api.pinterest.com/v1/boards/readysetprep/business-casual-interview-attire/pins?access_token=AWpsFBiCHYAcu15mAxj6h2h-BkWhFGSLUnqXuFFDRdlMEeBA0gAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cboard%2Coriginal_link",
       method: 'GET',
     }) .done(function(json) {
         $('.category-function-bar-items').append('<li id="bizcas">' + json + '</li>');

         $.each(json.data, function(index,item) {
           $(".pintrestStuff").append("<figure><a href=" + item.url + "><img src=" + item.image.original.url + "></img></a><figcaption>" + item.note + "</figcaption></figure>")
         });
  });
});

$(".casual").on("click", function() {
//casual
  console.log("button 4")
  $(".rubydiv").hide();
 $.ajax({
    dataType: "json",
     url: "https://api.pinterest.com/v1/boards/readysetprep/casual-interview-attire/pins?access_token=AWpsFBiCHYAcu15mAxj6h2h-BkWhFGSLUnqXuFFDRdlMEeBA0gAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cboard%2Coriginal_link",
     method: 'GET',
   }) .done(function(json) {
        $('.category-function-bar-items').append('<li id="casual">' + json + '</li>');

        $.each(json.data, function(index,item) {
          $(".pintrestStuff").append("<figure><a href=" + item.url + "><img src=" + item.image.original.url + "></img></a><figcaption>" + item.note + "</figcaption></figure>")
        });
});
});
});
