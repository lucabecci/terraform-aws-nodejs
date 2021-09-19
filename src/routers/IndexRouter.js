const express = require("express")
const IndexController = require("../controllers/IndexController");

class IndexRouter {
    #indexController = new IndexController
    #init()
    static router = express.Router()


}