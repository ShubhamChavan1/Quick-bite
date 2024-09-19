import React from "react"
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";
class AboutClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        }
    }

    //commit phase in mounting
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shubhamchavan1");
        const json = await data.json();
        this.setState({ userInfo: json })

    }


    //after setState is called
    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
    render() {

        if (this.state.userInfo === null) {
            return <Shimmer />
        }

        return <div className="container">
            <div className="box">
                <h1>About me</h1>
                <h3>Username:  {this.state.userInfo.name}</h3>
                {
                    <userContext.Consumer>
                    {({loggedInUser}) => <h1>LoggedInUser: {loggedInUser}</h1>}
                    </userContext.Consumer>
                }
            
                <h3>bio: {this.state.userInfo.bio}</h3>
                <a href="https://github.com/ShubhamChavan1">My GitHub Profile</a>
                <div className="avatar">
                    <img src={this.state.userInfo.avatar_url} alt="" />
                </div>
            </div>
        </div>
    }
}

export default AboutClass;