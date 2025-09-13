import "./Avatar.css"
function Avatar(greet){
    
    return(
        <div className="container">
            <p className="ima"><img src="./vite.svg" alt=""/></p>
            <p className="name">name:{greet.name}</p>
            <p className="course">Course:{greet.course}</p>
            <p className="rollno"> rollNo:{greet.rollno}</p>
            <p className="blood"> bloodGroup:{greet.blood}</p>
            <p className="dob"> DOB:{greet.dob}</p>
        </div>
    )

}
export default  Avatar
