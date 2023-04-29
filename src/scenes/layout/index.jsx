import React, {useState} from 'react'
import { Box, useMediaQuery} from "@mui/material";
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from 'state/api';

const Layout = () => {
    const isNonMobile= useMediaQuery("(min-width: 600px)"); // Its going to return Boolean false in case of Mobile;
    const [isSidebarOpen, setIsSidebarOpen]= useState(true);
  const userId = useSelector((state) => state.global.userId)
    const {data} =useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
        user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth= "250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          />
        <Box flexGrow={1}>
            <Navbar  isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} user={data || {}}/>
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout;