"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CommentIcon from '@mui/icons-material/Comment';
import { useFontContext } from '@/providers/font';
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';
import { DefaultUser, User } from 'next-auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


interface settingPath {
  name: string
  path: string
}

export default function ResponsiveAppBar() {
  const fontCtx = useFontContext();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { data: session, status } = useSession();
  // console.log(session);

  interface settingPath {
    name: string
    path: string
  }
  const [settings, setSettings] = useState<settingPath[]>([]);
  const [user, setUser] = useState<User>();

  const menus = ['สร้าง Flow', 'หมวดหมู่', 'ชื่นชอบ', 'เกี่ยวกับเรา'];
  const menusPath = ['/flow/create', '/flow/catagory', '/flow/favorite', '/about-us'];


  const userSettings = () => {
    if (session) {
      setSettings([
        {name: 'Profile', path: '/profile'},
        {name: 'Account', path: '/account'},
        {name: 'Logout', path: '/api/auth/signout'},
      ]);
      const currentUser = session.user as User;
      setUser(currentUser);
    } else {
      setSettings([{name: 'Login', path: '/api/auth/signin'}]);
    }
  };

  useEffect(() => {
    userSettings();
  },[session])


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRedirect = async (path: string) => {
    switch (path) {
      case '/api/auth/signin':
        signIn("google");
        break;
      case '/api/auth/signout':
        await signOut({ redirect: true, callbackUrl: "/" });
        break;
      default:
        router.push(path);
        break;
    }
  }

  return (
    <AppBar position="static" className='bg-gray-800'>
      <Container maxWidth="xl" >
        {/* Desktop */}
        <Toolbar disableGutters>
          <Link href={"/"} className='flex justify-center items-center'>
            <CommentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
              RPA-SI
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menus.map((page, index) => (
              <Button
                className={`${fontCtx?.ibmPlexSansThai.className} hover:underline`}
                key={page}
                onClick={() => handleRedirect(menusPath[index])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menus.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={() => handleRedirect(menusPath[index])}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href={"/"} className='flex justify-center items-center'>
            <CommentIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              RPA-SI
            </Typography>
          </Link>

          {/* User Icon */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                { user?.image ?
                  (<Avatar alt="User Icon" src={user.image}/>)
                  :
                  (<Avatar alt="User Icon"/>)
                }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => handleRedirect(setting.path)}>
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

