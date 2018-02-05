console.log( 'js' );

$( document ).ready( function(){
  $('button').on('click',function(){
        var div = document.createElement('div');
        $("#container").append(div);
        $('#container div').append('<p class="number-value">' + count + '</p>');
        $('#container div').append($('<input type="button" value="Swap"/>'));
        $('#container div').append($('<input type="button" value="Delete"/>'));
  });
  }); //end doc ready
