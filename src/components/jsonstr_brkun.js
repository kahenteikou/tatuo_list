import React from "react"
class JSONSTR_br_Tag extends React.Component{
    render(){
        return (
            <>
            {
                this.props.children.split('\n').map((str,index) => (
                    <React.Fragment key={index}>{str}<br /></React.Fragment>
                ))
            }
            </>
        )
    }
}
export default JSONSTR_br_Tag