import React from "react";
import PropTypes from "prop-types";
import "./SimpleReactFooter.sass";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa"
import {ImInstagram} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import {FaPinterestSquare} from "react-icons/fa";
import {ImYoutube} from "react-icons/im";

class SimpleReactFooter extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div style={{ backgroundColor: this.props.backgroundColor || "bisque" }} className="footer-container">

                <div className="first-row">
                    <div className="col-about">
                            <div style={{ color: this.props.fontColor || "black" }} className="first-title">{this.props.title}</div> 
                            <div style={{ color: this.props.fontColor || "black" }} className="description">{this.props.description}</div>
                    </div>
                    {this.props.columns.map(column => (
                        <div className="columns">
                            <div style={{ color: this.props.fontColor || "black" }} className="second-title">{column.title}</div>
                            {column.resources.map(resource => (
                                <div key={resource.id}>
                                    <a href={`${resource.link}`} target="_blank" style={{ color: this.props.fontColor || "black" }} className="resources">{resource.name}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {this.props.facebook != undefined && this.props.linkedin != undefined && this.props.instagram != undefined && this.props.twitter != undefined && this.props.pinterest != undefined && this.props.youtube != undefined ?
                <div className="social-media-col">
                    <div style={{ color: this.props.fontColor || "black" }} className="stay-connected-title">Stay connected</div>
                    <div className="social-media">
                        {this.props.facebook != undefined ? <a href={`https://www.facebook.com/${this.props.facebook}`} target="_blank" className="socialMediaLogo"><ImFacebook2 color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {this.props.linkedin != undefined ? <a href={`https://www.linkedin.com/in/${this.props.linkedin}`} target="_blank" className="socialMediaLogo"><FaTwitterSquare color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {this.props.instagram != undefined ? <a href={`https://www.instagram.com/${this.props.instagram}`} target="_blank" className="socialMediaLogo"><ImInstagram color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {this.props.twitter != undefined ? <a href={`https://www.twitter.com/${this.props.twitter}`} target="_blank" className="socialMediaLogo"><ImLinkedin color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {this.props.pinterest != undefined ? <a href={`https://www.pinterest.com/${this.props.pinterest}`} target="_blank" className="socialMediaLogo"><FaPinterestSquare color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                        {this.props.youtube != undefined ? <a href={`https://www.youtube.com/channel/${this.props.youtube}`} target="_blank" className="socialMediaLogo"><ImYoutube color={`${this.props.iconColor || "black" }`} size={25}/> </a> : ""}
                    </div>
                </div> : ""}

                <div>
                    <div style={{ color: this.props.copyrightColor || "grey" }} className="copyright">Copyright &copy; {this.props.copyright}</div>
                </div>
            </div>
        )
	}
}

SimpleReactFooter.propTypes = {
    description: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    youtube: PropTypes.string,
    pinterest: PropTypes.string,
    title: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            resources: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    link: PropTypes.string
                })
            )
        })
    ),
    copyright: PropTypes.string,
    iconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    copyrightColor: PropTypes.string
};

export default SimpleReactFooter;