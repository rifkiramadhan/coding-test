import React from 'react';
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, LogoNews } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />

        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoNews} alt="Logo Kabayan Coding" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">            
                <p>&copy; Rifki Ramadhan | Coding Test | 2022</p>
            </div>
        </div>
    )
}

export default Footer;
