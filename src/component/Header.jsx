import React, { useState } from 'react'
import {AppBar, Toolbar, styled, Box , Typography, InputBase} from '@mui/material'
import {Menu, BookmarkAdd , ExpandMore} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { logoURL } from '../constants/constant'
import HeaderMenu from './HeaderMenu';
import { routePath } from '../constants/route';

const StyledToolBar = styled(Toolbar) `
background:#121212;
min-height: 56px !important;
padding: 0 115px !important;
justify-content: space-between;
& > *{
    padding: 0 15px;
}
& > div {
    display:flex;
    align-item: center;
    cursor:pointer;
    & > p {
        font-size: 17px;
        font-weight:600;
    }
}
& > p{
    font-size: 17px;
    font-weight:600;
}
`;

const InputSearchField = styled(InputBase)`
background:#FFFFFF;
height: 30px;
width: 48%;
border-radius: 5px;
`

const Logo = styled('img')({
    width : 64
})

const Header = () => {
    const [open, setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null);
    }
  return (
   <>
<AppBar position='static'>
    <StyledToolBar>
        <Logo src={logoURL} alt="logo"  onClick={() => navigate(routePath.home)}/>
        <Box onClick={handleClick}>
            <Menu/>
            <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open= {open} handleClose={handleClose}/>
        <InputSearchField/>
        <Typography>IMDb<Box component="span">Pro</Box></Typography>
        <Box>
            <BookmarkAdd/>
            <Typography>watchlist</Typography>
        </Box>
        <Typography>sign In</Typography>
        <Box>
            <Typography>EN</Typography>
            <ExpandMore/>
        </Box>
    </StyledToolBar>
</AppBar>
   </>
  )
}

export default Header