import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "./Switch";
import { useSelector } from "react-redux";

const icon = (name) => `/assets/navbar/${name}.svg`

const links = [
    {
        title: "Dashboard",
        url: "/stock",
        // icon:"/assets/navbar/ic_analytics.svg"
        icon: icon("ic_analytics"),
    },
    {
        title: "Purchases",
        url: "/stock/purchases",
        icon: icon("purchase"),
    },
    {
        title: "Sales",
        icon: icon("sales"),
        url: "/stock/sales/",
    },
    {
        title: "Firms",
        icon: icon("firms"),
        url: "/stock/firms/",
    },
    {
        title: "Brands",
        icon: icon("brand"),
        url: "/stock/brands/",
    },
    {
        title: "Products",
        icon: icon("ic_cart"),
        url: "/stock/products/",
    },
];


const iconStyle = {
    borderRadius: "1rem",
    "&:hover": {
        backgroundColor: "#38636D",
        color: "white",
    },
};
const selectedStyle = {
    backgroundColor: "secondary.main",
    borderRadius: "1rem",
    "&:hover": {
        backgroundColor: "#38636D",
        color: "white",
    },
    color: "white",
};


const MenuListItems = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const { mode } = useSelector((state) => state.darkMode)

    // console.log(pathname);
    return (
        <div style={{ marginTop: "-4rem" }}>
            <Toolbar />
            <List sx={{ height: "100vh", backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }} >
            <Switch/>
                {links.map((item) => (
                    <ListItem key={item.title} disablePadding sx={{ marginTop: ".2rem" }}>
                        <ListItemButton 
                        onClick={()=>navigate(item.url)} 
                            sx={pathname == item.url ? selectedStyle : iconStyle}
                        >
                                <Box sx={{
                                    width:24,
                                    height:24,
                                    mask: `url(${item.icon}) no-repeat center / contain`,
                                    mr:2,
                                    bgcolor:"currentColor",
                                }}/>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MenuListItems