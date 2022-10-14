const usersController={
    createUser(req,res){
        console.log(req.body)
        const {}=req.body
        res.send("Create user Controller")
    },
    getUsers(req,res){
        res.send("Get all users")
    }
}

module.exports=usersController