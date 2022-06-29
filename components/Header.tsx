import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Head>
                <title>Simple React Next Redux</title>
                <meta name="description" content="Typescript example combining React Next Redux." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link href="/"><a>Home</a></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href="/post"><a>Post</a></Link></MenuItem>
            </Menu>
        </div>
    )
}

export default Header;