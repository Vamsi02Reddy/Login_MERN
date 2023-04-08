const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const cors=require("cors")
app.use(cors())

//Connecting mongoose
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://vamsi1:vamsi@atlascluster.gwojxqi.mongodb.net/login_mern?retryWrites=true&w=majority").then(()=>{
    console.log("Connected Successfully")
}).catch((err)=>{
    console.log(err)
})

//schema
const userSchema=new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type :String,
        required :true,
        unique :true,
    },
    password:String,
    confirmpassword :String,
})

const userModel=new mongoose.model("userModel",userSchema)

//get and post 
app.get("/",(req,res)=>{
    res.send("data")
})

app.post("/register",async (req,res)=>{
    const {firstname,lastname,email,password,confirmpassword}=req.body;
    const user = await userModel.findOne({email : email});
    try {
        if(user){
            res.status(403).json({message : "THis email id already exists"})
        }
        else{
            console.log(req.body)
            const userData=new userModel({
                firstname,
                lastname,
                email,
                password,
                confirmpassword,
            })
            const data = await userData.save()
            res.send({message : "Successfully Registered"})
        }
    } catch (error) {
        res.status(500).json("Server Crashed")
    }
})


//for login
app.post("/login",async(req,res)=>{
    console.log(req.body)
        const {email,password}=req.body
        const user=await userModel.findOne({email : email});
        try {
            if(user){
                if( password==user.password){
                    res.status(200).json({message : "Logged in Successfully" , user})
                }
                else{
                    res.status(401).json({message : "Invalid credentials"})
                }
            }
        } catch (error) {
            res.status(403).json("Email doesn't exists")
        }
})



//app listen port number
app.listen(3030,()=>{
    console.log("server is running")
})