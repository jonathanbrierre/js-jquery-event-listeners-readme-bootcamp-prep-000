//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load',function(){
     $('img').addClass('tasty');
     $('img').css("background-color", 'red')
  })
 
}

function pressIt(){
  $('#typing').on('keydown',function(e){
    if (e.key == 'G'){
      alert('You motherfucker')
    }
  })
}
function submitIt(){
  $('form').on('submit',function(){
     alert('Your form is going to be submitted now.') 
  })
}


$(document).ready(function(){
  getIt()
  pressIt()
  submitIt()
  frameIt()


});
