import * as React from "react"

class Twitter_Here extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <a href={this.props.href} className="Twitter_Link">
                <div className="Twitter_link_cont">
                Twitter Here
                </div>
            </a>
        );
    }
}
export default Twitter_Here