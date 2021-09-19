class IndexController {
    index(req, res){
        return res.status(200).json({
            message: "Welcome to my api test for Terraform and AWS EC2"
        })
    }

    status(req, res){
        return res.status(200).json({
            status: true,
            namespace: process.env.NAMESPACE,
            port: process.env.PORT,
            enviroment: process.env.NODE_ENV
        })
    }
}

module.exports = IndexController