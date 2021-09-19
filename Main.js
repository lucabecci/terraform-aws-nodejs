require("colors")
require("dotenv").config()
const Application = require("./Application");

class Main{
    static process(){
        const application = new Application
        application.start()
        process.on('SIGINT', function() {
            console.log("Waiting for close all process...".yellow)
            application.close()
            console.log("Closing the system...".yellow)
            process.exit(0)
        });
    }
}


Main.process()