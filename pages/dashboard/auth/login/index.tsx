import Link from 'next/link';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import PageContainer from '../../../../src/components/container/PageContainer';

import Logo from '../../../../src/layouts/full/shared/logo/Logo';
import AuthLogin from '../../authForms/AuthLogin';

// components


const Login2 = () => {
  
  return (
    <PageContainer>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
               
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

Login2.layout = "Blank";
export default Login2;
