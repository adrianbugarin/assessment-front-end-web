console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



let rubberDuck = document.getElementById("rubberDuck")

rubberDuck.addEventListener('mouseover', (e) => {
    alert('Give user a compliment');
})