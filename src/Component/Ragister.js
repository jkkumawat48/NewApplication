import React,{useState} from "react";
const Ragister=()=>{
    const[data,setData]=useState({name:"",email:"",password:""})
    const handleonChange=(e)=>{
        const{name,value}=e.target;
        setData({...data,[name]:value})
    }
const handlesubmit=(e)=>{
    e.preventDefault();
    const{name,email,password} = data
    if(name == ""){
        alert("name field is required")
        return
    }
    if(email == ""){
        alert("email field is required")
        return
    }
    if(!email.includes("@")){
        alert("please enter valid email address")
        return
    }
    if(password == ""){
        alert("password field is required")
        return
    }
    if(password.length <5){
        alert("password length greater five")
        return
    }
    console.log(data)
}
    return(
        <div className="col-sm-3 offset-sm-4">
            <h1>Login Page</h1>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <input type="text" placeholder="Enter Your Name" name="name" value={data.name} onChange={(e)=>handleonChange(e)} className="form-control"/>
                <br />
                <input type="email" placeholder="Enter Your Email" name="email" value={data.email} onChange={(e)=>handleonChange(e)} className="form-control"/>
                <br />
                <input type="password" placeholder="Enter Your Password" maxLength="5" name="password"value={data.password} onChange={(e)=>handleonChange(e)} className="form-control"/>
                <br />
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}
export default Ragister;