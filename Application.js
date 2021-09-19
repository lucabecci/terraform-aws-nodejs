const express = require("express")
const morgan = require("morgan")

class Application{
	constructor(){
		this.server = null
		this.app = express()
	}

	start(){
		this.conf()
		this.server = this.app.listen(4000, function(err){
			if(err) throw new Error("Error to initialize the server")
			console.log("Server on port:", 4000)
		})
	}
	conf(){
		this.app.use(morgan("dev"))
		this.app.use(express.json())
		this.app.use(express.urlencoded({extended: false, limit: "50mb"}))
	}
	close(){
		this.server.close()
		console.log("Server closed...")
	}
}

module.exports = Application

