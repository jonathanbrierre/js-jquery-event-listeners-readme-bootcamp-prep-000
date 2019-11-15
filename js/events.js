//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load',function(){
    
  })
  $('img').classList.append('tasty');
  $('img').style.borderColor = red
}

function pressIt(){
  $('#typing').on('keydown',function(e){
    if (e.key === 'g'){
      alert('You motherfucker')
    }
  })
}
function submitIt(){
  $('input').on('submit',function(){
     alert('Your form is going to be submitted now.') 
  })
}


$(document).ready(function(){
getIt()
pressIt()
submitIt()
frameIt()


});
