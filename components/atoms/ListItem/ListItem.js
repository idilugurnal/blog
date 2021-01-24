import React, { Component } from "react";
import styles from "./ListItem.module.scss";
import Link from "next/link";

class ListItem extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.listItem}>
        <Link href={this.props.link}>
          <a className={styles.itemText}>{children}</a>
        </Link>
      </div>
    );
  }
}

export default ListItem;
