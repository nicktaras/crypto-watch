import React from 'react';
import { Link } from "react-router-dom";
import './appNav.css';

class AppNav extends React.Component {
    render() {
        let linkElements = this.props.links.map((link, index) => {
            return (
                <Link className="link" key={index} to={link.url}>{link.title}</Link>
            )
        })
        return <div className="wrapper">{linkElements}</div>
    }
}    

export default AppNav;