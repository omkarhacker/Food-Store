
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"dummy",
                location:"dummy",
            }
        };
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/omkarhacker");
        const json= await data.json();
        
        this.setState({
            userInfo:json,
        })
    }

    render(){
        return (
            <div className="user-card">
            <img src={this.state.userInfo.avatar_url}></img>
             <h2>Name: {this.state.userInfo.name}</h2>
             <h3>Location: {this.state.userInfo.location}</h3>
             <h4>Contact: {this.state.userInfo.login}</h4>
           </div>
        );
    }
}

export default UserClass;