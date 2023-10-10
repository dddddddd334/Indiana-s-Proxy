//make sure express is install
const express = require('express');
//create a express app
const app = express();
//set the port
const port = 3000;

//serve static files(eg, .html .js etc) from the folder static for the code of you express app 
app.use(express.static('static'));

// Start the server
app.listen(port);
console.log('app listening on port ' + port + '')