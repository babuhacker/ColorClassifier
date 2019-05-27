
let r,g,b;
let database;
function setup(){
		
		
	var firebaseConfig = {
    apiKey: "AIzaSyDOVa0aqyrHrJsEF2_57OrbXwNyh8eLaE4",
    authDomain: "basic-b0cba.firebaseapp.com",
    databaseURL: "https://basic-b0cba.firebaseio.com",
    projectId: "basic-b0cba",
    storageBucket: "basic-b0cba.appspot.com",
    messagingSenderId: "230699426858",
    appId: "1:230699426858:web:afc95ee6d9e1e858"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	database = firebase.database();
  
  
	createCanvas(400,400);
	r = random(256);
	g = random(256);
	b = random(256);
	background(r,g,b);
	let buttons=[];
	buttons.push(createButton('red'));
	buttons.push(createButton('green'));
	buttons.push(createButton('blue'));
	buttons.push(createButton('orange'));
	buttons.push(createButton('yellow'));
	buttons.push(createButton('pink'));
	buttons.push(createButton('purpale'));
	buttons.push(createButton('brown'));
	buttons.push(createButton('grey'));
	
	for(let i=0; i< buttons.length;i++){
		buttons[i].mousePressed(sendData);
	}
  
}

function sendData(){
	let colorDatabase = database.ref('colors');
	
	var data={
		
		r:r,
		g:g,
		b:b,
		label:this.html()
	}
	console.log("saving data");
	console.log(data);
	let color = colorDatabase.push(data,finished);
	console.log(color.key);
}
function finished(err){
	if(err){
		console.error("ooops");
		console.error(err);
	}
	else{
		console.log("saved");
	}
}
