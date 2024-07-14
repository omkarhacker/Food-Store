import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2> hello React</h2>
            <User/>
            <br></br>
            <UserClass name={"omkar"}/>
        </div>
    )
};
export default About;