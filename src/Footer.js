import React from "react";
import PropTypes from "prop-types";
import "./Footer.sass";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa"
import {ImInstagram} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLogo: this.props.imgLogo,
            description: this.props.description,
            socialMedia: this.props.socialMedia,
            resourcesName: this.props.resourcesName,
            resources: this.props.resources
        }
    }
	render() {
		return (
            <div className="footer-container">
                <div className="col-about">
                    <div>
                        <img className="img-logo" src={this.state.imgLogo.imgUrl} alt={this.state.imgLogo.alt} />
                        <div className="titles">About</div>
                        <div>
                            {this.state.description}
                        </div>
                    </div>
                </div>
                <div className="social-media-col col">
                    <div className="titles">Follow us:</div>
                    <div className="social-media">
                        <a href="#" target="_blank" className="socialMediaLogo"><ImFacebook2 color="black" size={22}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><FaTwitterSquare color="black"size={22}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><ImInstagram color="black" size={22}/> </a>
                        <a href="#" target="_blank" className="socialMediaLogo"><ImLinkedin color="black" size={22}/> </a>
                    </div>
                </div>

                <div>
                    <div className="titles">{this.state.resourcesName}</div>
                    {this.state.resources.map(resource => (
                        <div key={resource.id}>
                            <div>{resource}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
	}
}

Footer.propTypes = {
    imgLogo: PropTypes.shape({
        imgUrl: PropTypes.string,
        alt: PropTypes.string
    }),
    description: PropTypes.string,
    socialMedia: PropTypes.arrayOf(
        PropTypes.shape({
            socialMedianame: PropTypes.string,
            socialMediaUrl: PropTypes.string
        })
    ),
    resourcesName: PropTypes.string,
    resources: PropTypes.arrayOf(PropTypes.string)
};

export default Footer;