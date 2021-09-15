const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8800
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',(req,res)=>{
	res.sendFile('index.html');
})

app.post('/',(req,res)=>{

	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let email = req.body.email;
	let password = req.body.Password;
	let reEnterPassword = req.body.reEnterPassword;
	let values = [firstName,lastName,email,password];
	if(password != reEnterPassword){
         console.log('doesnot match');
		 res.status(500);
		 res.send("<h2>Password Doesnot match!</h2><em>Try again!</em>")
		 
	}else{
		console.log('Values are \n');
		Array.from(values).forEach(function(value){
			console.log(value + "\n");
		})
		res.send('<h3>data received</h3><em>Check the console for the data!</em>');
		res.status(200);

	}
	
	
	
})
app.listen(port,()=>{
	console.log(process.env.PORT || `Server is started at ${port}`);
})