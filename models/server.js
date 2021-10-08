const express = require('express');
const cors = require('cors');
const path = require('path');
class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

	

		// Middleware
		this.middlewares();
		
		

        // Other Routes
        this.app.get('*', (req, res)=> {
            res.sendFile(path.resolve(__dirname,'../public/index.html'))
        })        
	}

	
	middlewares() {
		this.app.use(cors());
		this.app.use(express.static('public'));
		this.app.use(express.json());
	}

	

	listen() {
		this.app.listen(this.port, () => {
			console.log(`server in ${this.port}`);
		});
	}
}

module.exports = Server;
