import React from 'react';
import Header from './Header';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      margin: theme.spacing(3),
    },
}));

const Layout = ({children}: any) => {
    return (
        <Root>
            <Header />
            {children}
        </Root>
    )
}

export default Layout;