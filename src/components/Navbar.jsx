import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const menuOptions = [
    { text: 'Home', icon: <HomeIcon />, href: '#home' },
    { text: 'Sobre nós', icon: <InfoIcon />, href: '#sobre' },
    { text: 'Nosso Trabalho', icon: <HomeWorkIcon />, href: '#trabalho' },
    { text: 'Avaliação', icon: <CommentRoundedIcon />, href: '#avaliacao' },
    { text: 'Contato', icon: <PhoneRoundedIcon />, href: '#contato' },
    { text: 'Carrinho', icon: <ShoppingCartRoundedIcon />, href: '#carrinho' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="logo donuts" />
      </div>

      <div className="navbar-links">
        {menuOptions.slice(0, -1).map((item) => (
          <a
            key={item.text}
            href={item.href}
            className={activeSection === item.href ? 'active-link' : ''}
          >
            {item.text}
          </a>
        ))}
        <a
          href="#carrinho"
          className={activeSection === '#carrinho' ? 'active-link' : ''}
        >
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="button-primary">Reservar agora</button>
      </div>

      <div className="nav-bar-menu">
        <HiOutlineBars3
          className="menu-icon"
          onClick={() => setOpenMenu(true)}
          aria-label="Abrir menu"
        />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  className={activeSection === item.href ? 'active-link' : ''}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
