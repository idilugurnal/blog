import React from "react";
import {FaTwitter, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import styles from './Footer.module.scss';


export default function SocialFollow() {
    return (
        <div className={styles.socialContainer}>
            <a href="https://twitter.com/idilugurnal"
               className={styles.twitter}
               target="_blank" rel="noopener noreferrer">
                <FaTwitter size={25}/>
            </a>
            <a href="https://www.linkedin.com/in/idilugurnal/"
               className={styles.linkedin}
               target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={25}/>
            </a>
            <a href="https://www.instagram.com/idilugurnal/" className={styles.instagram}
               target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25}/>
            </a>
            <a href="https://github.com/idilugurnal"
               className={styles.github}
               target="_blank" rel="noopener noreferrer">
                <FaGithub size={25}/>
            </a>
        </div>
    );
}