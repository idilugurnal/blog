import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";
import ListItem from "../../atoms/ListItem/ListItem";

class NavigationBar extends Component {
  render() {
    return (
      <div className={styles.navigationContainer}>
        <ListItem link={"/"}>Home</ListItem>
        <ListItem link={"/blog"}>Blog</ListItem>
        <ListItem link={"/about"}>About</ListItem>
        <ListItem link={"/CV"}>CV</ListItem>
        <ListItem link={"/contact"}>Contact</ListItem>
      </div>
    );
  }
}

export default NavigationBar;
