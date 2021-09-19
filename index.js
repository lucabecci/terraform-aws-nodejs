const express = require("express")
const morgan = require("morgan")
class Application(){
	constructor(){
		this.server = null
	}

	init(){
		const app = express()
		this.conf(app)
		this.server = app.listen(4000, function(err){
			if(err) throw new Error("Error to initialize the server")
			console.log("Server on port:", 4000)
		})
	}
	conf(app){
		app.use(morgan("dev"))
		app.use(express.json())
		app.use(express.urlencoded({extended: false, limit: "50mb"}))
	}

	start(app){
		throw new Error("start is not implemented")
	}

	close(app){
		throw new Error("close is not implemented")
	}
}


new Application().init()
