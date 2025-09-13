
// import Product from "./Product.jsx"
// import  Avatar from"./Avatar.jsx"
// import "./Product.css"
import "./App.css"
import { useState } from "react"
// import "./Avatar.css"
// import BlogPost from "./BlogPost.jsx"

function App() {
  // const product="xxxxxx"
  // const price=200
  // const isavailble=true
  // const isnotavailble=false

  // const name="kavya"
  //const course="B-Tech"
  //   const rollno="24VV1A0527"
  //   const blood="O +ve"
  //   const dob="07/12/2006"
  //   const idcards=[{
  //     name:"yyyyy",
  //     rollNo:"24VV1A1",
  //     bloodgroup:"O +ve"

  //   },

  //  {
  //     name:"xxxxxx",
  //     rollNo:"24VV1A2",
  //     bloodgroup:"O +ve"

  //   },
  // {
  //     name:"zzzzz",
  //     rollNo:"24VV1A3",
  //     bloodgroup:"O +ve"
  // }

  // ]
  // const posts=[
  //   {
  //     id:1,
  //     author:"ttttt",
  //     title:"lion",
  //     description:"eerrtty"
  //   }
  // ,
  // {
  //     id:2,
  //     author:"yyyyyy",
  //     title:"lion",
  //     description:"eerrtty"
  //   },
  //   {
  //     id:3,
  //     author:"hjllgg",
  //     title:"lion",
  //     description:"eerrtty"
  //   }

  // ]
  // const handleChange = (event) => {
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  // }

  
  //  const handleClick=(name)=>{
  //   console.log("you clicked the button")
  //   alert("hello" + name)
  //  }

const[count,setCount]=useState(0)
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const handleEmail=(event)=>{
  setEmail(event.target.value)
}
const handlePassword=(event)=>{
  setPassword(event.target.value)
}
const [formData,setFormdata]=useState(
  {
    email:"",
    password:""
  }
)

const handleChange=(event)=>{
 // console.log(event.target.name)
  //console.log(event.target.value)
  setFormdata({
    ...formData,
    [event.target.name]:event.target.value

  })
}
const handleSubmit=(event)=>{
  event.preventDefault();
   alert(`Email:${formData.email} \npassword:${formData.password } \n you are logged in`)
  
}


  const handleIncrement=()=>{
    setCount((prevcount)=>prevcount+1)
    console.log(count)
  }

  return (
    <div className="con">
      <p>i am a button</p>  
        <form onSubmit={handleSubmit}> 
         <input type="text" name="email" placeholder="enter your email" onChange={handleChange} />
          <input type="password" name="password" placeholder="enter your password" onChange={handleChange} />
          <button type="submit"> log in</button>

        </form> 
    <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleSubmit}>submit</button>
    </div>
  )
}



export default App
