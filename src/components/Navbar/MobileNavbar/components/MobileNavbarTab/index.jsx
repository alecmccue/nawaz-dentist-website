import React from "react";
import Link from "next/link";
import { ListItem, ListItemButton } from "@mui/material";

const MobileNavbarTab = ({ handleClick, label, to }) => (
    <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
            <Link href={to} style={{ width: "100%" }}>
                {label}
            </Link>
        </ListItemButton>
    </ListItem>
)

export default MobileNavbarTab