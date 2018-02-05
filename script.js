console.log( 'js' );

$( document ).ready( function(){
  $('button').on('click',function(){
        var div = document.createElement('div');
        $("#container").append(div);
        $('#container').append('<p class="number-value">' + count + '</p>');
        $('#container').append('<button class="swap">Swap</button>');
        $('#container').append('<button class="delete">Delete</button>');
  });
  }); //end doc ready
