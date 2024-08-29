import React from "react"
import Shimmer from "./shimmer";
class AboutClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        }

        console.log("child constructor called")
    }

    //commit phase in mounting
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shubhamchavan1");
        const json = await data.json();
        this.setState({ userInfo: json })
        console.log("component didmounted");
    }


    //after setState is called
    componentDidUpdate() {
        console.log("component updated")
    }

    componentWillUnmount() {
        console.log("component removed")
    }
    render() {
        console.log("child render")
        if (this.state.userInfo === null) {
            return <Shimmer />
        }

        return <div className="container">
            <div className="box">
                <h1>About me</h1>
                {/* <h3>{count}</h3> */}
                <h3>Username:{this.state.userInfo.name}</h3>
                <h3>bio:{this.state.userInfo.bio}</h3>
                <h3>{this.state.userInfo.location}</h3>
                <div className="avatar">
                    <img src={this.state.userInfo.avatar_url} alt="" />
                </div>
            </div>
        </div>
    }
}

export default AboutClass;