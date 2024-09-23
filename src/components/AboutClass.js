import React from "react"
import userContext from "../utils/userContext";
import { GitHubLogo } from "./GithubLogo";
import { DarkContext } from "../utils/DarkContextProvider";
import Shimmer from "../components/Shimmer";
class AboutClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: "dummy"
        }
    }

    //commit phase in mounting
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shubhamchavan1");
        const json = await data.json();
        console.log(json)
        this.setState({ userInfo: json })
    }

    render() {
        return (
            <DarkContext.Consumer>
                {({ Theme }) => {

                    if (this.state.userInfo === "dummy") {
                        return <Shimmer />
                    }

                    return (
                        <div className="min-h-screen" style={{
                            backgroundColor: Theme,
                            color: Theme === 'white' ? 'black' : 'white'
                        }} >
                            <div className="  flex justify-center items-center "   >
                                <div className="flex flex-col relative justify-center items-center mt-5 border border-solid border-3 w-[350px] h-[500px] rounded-xl border-black cursor-pointer hover:bg-slate-200 ">
                                    <div className="w-[150px] h-[150px] mt-3 absolute top-3 flex justify-center items-center rounded-full">
                                        <img className="rounded-full" src={this.state.userInfo.avatar_url} />
                                    </div>
                                    <div className=" mb-[25px]  text-center">
                                        <h1 className="font-bold text-xl">{this.state.userInfo.name}</h1>
                                        <h6>Front End Developer</h6>
                                        <h4>{this.state.userInfo.bio}</h4>
                                    </div>
                                    <div>
                                        <a href="https://github.com/ShubhamChavan1"><GitHubLogo /></a>
                                    </div>
                                </div>
                            </div>
                        </div>)

                }}
            </DarkContext.Consumer>
        )

    }

}

export default AboutClass;