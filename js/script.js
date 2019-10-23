console.log('Array of object')

var dogs = [
	{
		name: "Steve",
		id: "dogs",
		breed: "bull Dog",
		color: "black and white",
		height: 60,
		age: 21,
		photo: "images/dog1.jpg"
	},
	{
		name: "Daniel",
		id: "dogs",
		breed: "Brown dog",
		color: "Brown",
		height: 50,
		age: 13,
		photo: "images/dog2.jpg"
	},
	{
		name: "Connor",

		id: "dogs",
		breed: "Fluffy dog",
		color: "brown",
		height: 28,
		age: 7,
		photo: "images/dog3.jpg"
	},
	{
		name: "John",
		id: "dogs",
		breed: "Pitbull",
		color: "black and gold",
		height: 38,
		age: 15,
		photo: "images/dog4.jpg"
	},
	{
		name: "Jack",
		id: "dogs",
		breed: "husky",
		color: "white and black",
		height: 60,
		age: 24,
		photo: "images/dog5.jpg"
	}
];
// all dogs

function allDogs(){
for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
  document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
  document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
  document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
  document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';

}
}



document.getElementById('allDogs').addEventListener('click', function(){
	console.log(dogs);
	document.getElementById('dogs').innerHTML = " ";	//to clear the container
	for(var i = 0; i < dogs.length; i++) {
		if (dogs[i].name === 'allDogs') {
  		document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
  		document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
  		document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
  		}
	}
});




document.getElementById('Connor').addEventListener('click', function(){
	console.log(dogs);
	document.getElementById('dogs').innerHTML = " ";	//to clear the container
	for(var i = 0; i < dogs.length; i++) {
		if (dogs[i].name === 'Connor') {
  		document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
  		document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
  		document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
  		}
	}
});

document.getElementById('Jack').addEventListener('click', function(){
	console.log(dogs);
	document.getElementById('dogs').innerHTML = " ";	//to clear the container
	for(var i = 0; i < dogs.length; i++) {
		if (dogs[i].name === 'Jack') {
  		document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
  		document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
  		document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
  		document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
  		}
	}
});

// document.getElementById('height28').addEventListener('click', function(){
// 	console.log(dogs);
// 	document.getElementById('dogs').innerHTML = " ";	//to clear the container
// 	for(var i = 0; i < dogs.length; i++) {
// 		if (dogs[i].height < 30) {
//   		document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
//   		document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
//   		document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
//   		document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
//   		document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
// 		}
// 	}
// });


// document.getElementById('height40').addEventListener('click', function(){
// 	console.log(dogs);
// 	document.getElementById('dogs').innerHTML = " ";	//to clear the container
// 	for(var i = 0; i < dogs.length; i++) {
// 		if (dogs[i].height > 28) {
//   		document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
//   		document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
//   		document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
//   		document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
//   		document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
// 		}
// 	}
// });







// document.getElementById('height28').addEventListener('click', function(){
// 	console.log(dogs);
// 	document.getElementById('dogs').innerHTML = " ";	//to clear the container
// 	for(var i = 0; i < dogs.length; i++) {
// 		if (dogs[i].height < 30) {
//   		document.getElementById('dogs').innerHTML 
//   		+= '</br><h1 class="jumbotron text-success" >' + dogs[i].name + '</h1>';
//   		+ '<div class="row">'
//   		+ '<div class="col">'
//   		+ '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
//   		+ '</div>'
//   		+ '<div class="col">'
//   		+ '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
//   		+ '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
//   		+ '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
// 		+ '</div>'
// 		+ '</div>';
// 		}
// 	}
// });





// document.getElementById('height40').addEventListener('click', function(){
// 	console.log(dogs);
// 	document.getElementById('dogs').innerHTML = " ";	//to clear the container
	

// 	for(var i = 0; i < dogs.length; i++) {
// 		if (dogs[i].height > 28) {
//   			document.getElementById('dogs').innerHTML 
//   			+= '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
//   			+ '<div class="row">'
//   			+ '<div class="col">'
//   			+ '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
//   			+ '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
//   			+ '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
//   			+ '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
//   			+ '</div'
//   			+ '</div';
//   		}
// 	}
// });



document.getElementById('changeName').addEventListener('click', function(){
	var oldName = document.getElementById('oldName').value;
	var oldName = document.getElementById('newName').value;
	console.log(oldName, newName);
	for(var i = 0; i < dogs.length; i++) {
		if (oldName === dogs[i].name){
			dogs[i].name = newName;
		} 
	}
	console.log(dogs);
	allDogs();
});
 

document.getElementById('dogs').addEventListener('click', function(){
  allDogs();
});







