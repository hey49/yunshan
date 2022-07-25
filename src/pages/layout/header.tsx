import * as React from 'react';
import logo from '../data/public/logo.jpeg';
import './header.css';
import { useIntl } from 'react-intl';
import { Menu, Drawer, Button, Radio, Space } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AppBlockingSharp } from '@mui/icons-material';
import { history } from 'umi';

const { SubMenu } = Menu;

type ResponsiveAppBarProps = {
  switchButton: React.ReactElement;
};

const ResponsiveAppBar = ({ switchButton }: ResponsiveAppBarProps) => {
  const [current, setCurrent] = React.useState('mail');
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const intl = useIntl();
  const menuData = [
    {
      name: intl.formatMessage({ id: 'appbar.menu.home' }),
      path: './',
      children: [],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.protect' }),
      path: './protect',
      children: [
        {
          name: intl.formatMessage({ id: 'appbar.menu.protect.archive' }),
          path: './archive',
          children: [],
        },
        {
          name: intl.formatMessage({ id: 'appbar.menu.protect.htp' }),
          path: './tianxing',
          children: [],
        },
        {
          name: intl.formatMessage({ id: 'appbar.menu.protect.ncp' }),
          path: './concolor',
          children: [],
        },
        {
          name: intl.formatMessage({ id: 'appbar.menu.protect.investigate' }),
          path: './investigate',
          children: [],
        },
      ],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.report' }),
      path: './report',
      children: [],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.aboutus' }),
      path: './aboutus',
      children: [
        {
          name: intl.formatMessage({ id: 'appbar.menu.aboutus.council' }),
          path: './council',
          children: [],
        },
        {
          name: intl.formatMessage({ id: 'appbar.menu.aboutus.team' }),
          path: './team',
          children: [],
        },
        {
          name: intl.formatMessage({ id: 'appbar.menu.aboutus.timeline' }),
          path: './timeline',
          children: [],
        },
      ],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.partner' }),
      path: './partner',
      children: [],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.contact' }),
      path: './contact',
      children: [],
    },
    {
      name: intl.formatMessage({ id: 'appbar.menu.donate' }),
      path: './donate',
      children: [],
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: 'white', color: 'black' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className="logo" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setVisible(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              title={intl.formatMessage({ id: 'appbar.logo' })}
              placement="left"
              closable={false}
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="inline"
              >
                {menuData.map((item) => {
                  if (item.children.length === 0) {
                    return (
                      <Menu.Item
                        onClick={() => history.push(item.path)}
                        key={item.name}
                      >
                        {item.name}
                      </Menu.Item>
                    );
                  }

                  return (
                    <SubMenu key={item.name} title={item.name}>
                      {item.children.map((subItem) => (
                        <Menu.Item
                          onClick={() => history.push(subItem.path)}
                          key={subItem.name}
                        >
                          {subItem.name}
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  );
                })}
                {/* <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item> */}
              </Menu>
            </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {intl.formatMessage({ id: 'appbar.logo' })}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              {menuData.map((item) => {
                if (item.children.length === 0) {
                  return (
                    <Menu.Item
                      onClick={() => history.push(item.path)}
                      key={item.name}
                    >
                      {item.name}
                    </Menu.Item>
                  );
                }

                return (
                  <SubMenu key={item.name} title={item.name}>
                    {item.children.map((subItem) => (
                      <Menu.Item
                        key={subItem.name}
                        onClick={() => history.push(subItem.path)}
                      >
                        {subItem.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              })}
              {/* <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item> */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>{switchButton}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
