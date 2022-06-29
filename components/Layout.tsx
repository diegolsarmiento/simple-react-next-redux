import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
    width: '100%', minHeight: '95vh',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      margin: theme.spacing(3),
    },
}));

const Layout = ({children}: any) => {
    return (
       <div>
         <Root>
            <Header />
            {children}
         </Root>
         <Footer />
       </div>
    )
}

export default Layout;