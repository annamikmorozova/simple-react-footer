import React from "react";
import PropTypes from "prop-types";
import "./Footer.sass";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa"
import {ImInstagram} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import {FaPinterestSquare} from "react-icons/fa";
import {ImYoutube} from "react-icons/im";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            title1: this.props.title1,
            title2: this.props.title2,
            resources: this.props.resources,
            copyright: this.props.copyright,
            linkedin: this.props.linkedin,
            facebook: this.props.facebook,
            twitter: this.props.twitter,
            instagram: this.props.instagram,
            youtube: this.props.youtube,
            pinterest: this.props.pinterest
        }
    }

	render() {
		return (
            <div className="footer-container">

                <div className="first-row">
                    <div className="col-about">
                        <div>
                            <div className="titles">{this.state.title1}</div>
                            <div className="description">{this.state.description}</div>
                        </div>
                    </div>

                    <div>
                        <div className="titles">{this.state.title2}</div>
                        {this.state.resources.map(resource => (
                            <div key={resource.id}>
                                <a href={`${resource.link}`} target="_blank" className="resources">{resource.name}</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="social-media-col col">
                    <div className="titles">Stay connected</div>
                    <div className="social-media">
                        {this.state.facebook != undefined ? <a href={`https://www.facebook.com/${this.state.facebook}`} target="_blank" className="socialMediaLogo"><ImFacebook2 color="black" size={25}/> </a> : ""}
                        {this.state.linkedin != undefined ? <a href={`https://www.linkedin.com/in/${this.state.linkedin}`} target="_blank" className="socialMediaLogo"><FaTwitterSquare color="black"size={25}/> </a> : ""}
                        {this.state.instagram != undefined ? <a href={`https://www.instagram.com/${this.state.instagram}`} target="_blank" className="socialMediaLogo"><ImInstagram color="black" size={25}/> </a> : ""}
                        {this.state.twitter != undefined ? <a href={`https://www.twitter.com/${this.state.twitter}`} target="_blank" className="socialMediaLogo"><ImLinkedin color="black" size={25}/> </a> : ""}
                        {this.state.pinterest != undefined ? <a href={`https://www.pinterest.com/${this.state.pinterest}`} target="_blank" className="socialMediaLogo"><FaPinterestSquare color="black" size={25}/> </a> : ""}
                        {this.state.youtube != undefined ? <a href={`https://www.youtube.com/channel/${this.state.youtube}`} target="_blank" className="socialMediaLogo"><ImYoutube color="black" size={25}/> </a> : ""}
                    </div>
                </div>

                <div>
                    <div className="copyright">Copyright &copy; {this.state.copyright}</div>
                </div>
            </div>
        )
	}
}

Footer.propTypes = {
    description: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    youtube: PropTypes.string,
    pinterest: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    resources: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string
        })
    ),
    copyright: PropTypes.string
};

export default Footer;