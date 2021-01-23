import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './NavigationBar.module.scss'
import Link from "next/link";
import items from './MenuItems';

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {

    return (
        <>
            <ListItem button dense {...rest}>
                <div className={styles.subItem}>
                    <ListItemText style={{ paddingLeft: depth * depthStep}}>
                        <span>{label}</span>
                    </ListItemText>
                </div>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <Link href={subItem.link}>
                                <SidebarItem
                                    key={subItem.name}
                                    depth={depth + 1}
                                    depthStep={depthStep}
                                    {...subItem}
                                />
                        </Link>
                    ))}
                </List>
            ) : null}
        </>
    )
}

export default function NavigationBar({depthStep, depth }){
    return(
        <div className={styles.navigationBar}>
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <Link href={sidebarItem.link}>
                            <SidebarItem
                                key={`${sidebarItem.name}${index}`}
                                depthStep={depthStep}
                                depth={depth}
                                {...sidebarItem}
                            />
                    </Link>
                ))}
            </List>
        </div>
    )
}