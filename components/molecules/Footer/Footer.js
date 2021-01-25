import React from "react";
import {FaTwitter, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import styles from './Footer.module.scss';


export default function SocialFollow() {
    return (
        <div className={styles.socialContainer}>
            <a href="https://www.youtube.com/c/jamesqquick"
               className={styles.twitter}>
                <FaTwitter />
            </a>
            <a href="https://www.facebook.com/learnbuildteach/"
               className={styles.facebook}>
                <FaLinkedin/>
            </a>
            <a href="https://www.twitter.com/jamesqquick" className={styles.youtube}>
                <FaInstagram />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
               className={styles.instagram}>
                <FaGithub />
            </a>
        </div>
    );
}