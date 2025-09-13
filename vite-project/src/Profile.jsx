

function Profile(){

    const name="kavya"
    const age=18
    const isstudent=true
    return( 
        <div>
            <p>my name {name} </p>
            <p>my age {age}</p>
            <p>{isstudent==true?"i am a student":"i am not student"}</p>

        </div>

    ) 
      
    }
export default Profile