

exports.sendtoken = (user, status , res)=>{
    console.log("hello")
    const token = user.generatetoken();
    console.log(token)
    const options = {
        httpOnly: true,
        expires: new Date( Date.now() + 5 * 60 * 60 * 24 * 1000),
        secure: true,
        httpOnly: true,
        sameSite: 'none'
    }

    res.status(status).cookie('token', token , options).json({
        sucess : true,
        user : user
    })
}