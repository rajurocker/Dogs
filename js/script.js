console.log('Array of object');

var dogs = [
	{
		name: "Steve",
		id: "dogs101",
		breed: "bull Dog",
		color: "black and white",
		height: 60,
		age: 21,
		photo1: "images/dog1.jpg",
		photo2: "images/dog11bull.jpg",
		photo3: "images/Bulldog111dog.jpg"
	
	},
	{
		name: "Daniel",
		id: "dogs",
		breed: "Brown dog",
		color: "Brown",
		height: 50,
		age: 13,
		photo1: "images/dog2.jpg",
		photo2: "images/browndog22.jpg",
		photo3: "images/LightBrownDog222.png"
	},
	{
		name: "Connor",
		id: "dogs",
		breed: "Fluffy dog",
		color: "brown",
		height: 28,
		age: 7,
		photo1: "images/dog3.jpg",
		photo2: "images/chowchow33.jpg",
		photo3: "images/SamoyedDog333.jpg"
	},
	{
		name: "John",
		id: "dogs",
		breed: "Pitbull",
		color: "black and gold",
		height: 38,
		age: 15,
		photo1: "images/dog4.jpg",
		photo2: "images/AmericanPitbull44.jpg",
		photo3: "images/.Pitbull444.jpg"

	},
	{
		name: "Jack",
		id: "dogs",
		breed: "husky",
		color: "white and black",
		height: 60,
		age: 24,
		photo1: "images/dog5.jpg",
		photo2: "images/husky55.jpg",
		photo3: "images/HuskyBites555.jpg"


	}
];
// all dogs
var id = 101;
function allDogs(){
for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-success">' + dogs[i].name + '</h1>';
  document.getElementById('dogs').innerHTML += '<img id="dogs' + id.toString() + ' " class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>';
  document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-success" >' + dogs[i].breed + '</h5>';
  document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-success" > ' + dogs[i].age + '</h5>';
  document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-success" >' + dogs[i].height + '</h5>';
  id++;
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
 

// document.getElementById('dogs').addEventListener('click', function(){
  allDogs();
// });


$('.myDogs').on('click', function(){
  // console.log('dogs');
   console.log(typeof(this.id));// to check the data type
  console.log(this.id);

  $('.myModal').show();
  for (var i = 0; i < dogs.length ; i++){
    console.log(typeof(dogs[i].id));
    console.log(dogs[i].id);
    console.log(i);
    console.log(dogs[i].id === this.id);
    //id property of dogs is checked for  equivalence with the image id of the clicked element
    if (this.id.trim() == dogs[i].id.trim()) {
      //remove leading and trailing space in the string while trying to match
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].color);
      console.log(dogs[i].height);
      console.log(dogs[i].age);
      document.getElementById('modalContent').innerHTML
      += '<div class="jumbotrons ml-5 text-info"> ' + dogs[i].name + '</br>'
      + dogs[i].breed + '</br>' + dogs[i].color + '</br>'
      + 'Height : ' + dogs[i].height + '</br>' + 'Age :' + dogs[i].age + '</div>'
	  + '<div id="carouselExampleIndicators" class="carousel slide myCarousel" data-ride="carousel">'
      + '<ol class="carousel-indicators">'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
      + '</ol> <div class="carousel-inner"><div class="carousel-item active">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo2 + '"  alt="Dog"/>'
      + '</div><div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo3 + '"  alt="Dog"/>'
      + '</div> </div>'
      + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Previous</span> </a>'
      + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Next</span> </a></div>';
    }
    // + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
  }

});


$('.closeBar').on('click', function(){
	$('.myModal').hide();
});


