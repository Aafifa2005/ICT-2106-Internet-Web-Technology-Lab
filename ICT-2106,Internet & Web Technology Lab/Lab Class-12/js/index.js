function buttonClick1(){
    alert('Hello');
}

function paraClick(){
var text=document.getElementById('paraId');

//var text=document.querySelector('#paraId'); return object
text.innerHTML='This is second  text of the para.'
}

function imageClick(){
var text=document.querySelector('#image-id');

//var text=document.querySelector('#paraId'); return object
// 
text.src="images/rainy-day.jpeg";
}