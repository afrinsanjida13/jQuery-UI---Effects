// JavaScript


// jQuery

// add class demo start===================

$(document).ready(function(){

$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

});

// remove class demo start===================

$(document).ready(function(){
  $( function() {
    $( "#button2" ).on( "click", function() {
      $( "#effect2" ).removeClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect2" ).addClass( "newClass" );
      }, 1500 );
    }
  } );

});

// switch class demo start===================

$(document).ready(function(){
  $( function() {
    $( "#button3" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });
  } );

});

// toggle class demo start===================

$(document).ready(function(){
  $( function() {
    $( "#button4" ).on( "click", function() {
      $( "#effect4" ).toggleClass( "newClass", 1000 );
    });
  } );

});