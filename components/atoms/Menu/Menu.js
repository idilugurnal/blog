import React from 'react';
import Link from 'next/link';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <Link href={"/"}>
                <a>
                    <span role="img" aria-label="home">&#127968;</span>
                    Home
                </a>
            </Link>
            <Link href={"/blog"}>
                <a>
                    <span role="img" aria-label="blog">&#128203;</span>
                    Blog
                </a>
            </Link>
            <Link href={"/about"}>
            <a>
                <span role="img" aria-label="about me">&#128105;</span>
                About me
            </a>
            </Link>
            <Link href={"/CV"}>
                <a>
                    <span role="img" aria-label="price">&#x1f4b8;</span>
                    CV
                </a>
            </Link>
            <Link href={"/contact"}>
                <a>
                    <span role="img" aria-label="contact">&#x1f4e9;</span>
                    Contact
                </a>
            </Link>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;