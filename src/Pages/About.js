import './Pages.css';
import Footer from '../components/Footer';
import { styled } from '@mui/material/styles';

import { Box, Card, Container, Grid, Typography } from '@mui/material';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';

export default function About() {
  return (
    <Card
      sx={{
        backgroundImage: 'linear-gradient(to right, #8e9eab, #eef2f3);',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} justifyContent="center">
          <Container sx={{ padding: '15px' }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem' },
                textAlign: 'center',
                fontFamily: 'Inter',
                mt: '15px',
              }}
            >
              About GlobalJobsList <RocketLaunchIcon fontSize="30px" />
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ maxWidth: '700px' }}>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                textAlign: 'center',
              }}
            >
              Here are a couple of cool things about this app! Right now the
              main focus is moving the incoming jobs data from a JS file to
              Firebase so that CRUD operations can be performed on the job
              listings
            </Typography>
          </Container>
        </Grid>
        <Container
          sx={{
            borderRadius: '18px',

            display: 'flex',

            mt: '20px',
          }}
          flex={5}
        >
          <Container
            sx={{
              mt: '10px',
            }}
          >
            <Container
              sx={{ backgroundColor: '#000814', borderRadius: '18px' }}
            >
              <Grid item md={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.6rem',
                    textAlign: 'center',
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CodeIcon sx={{ fontSize: 35 }} /> React JS
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    mr: '20px',
                    ml: '20px',
                    mt: '10px',
                  }}
                >
                  Made with React JS, the styling (almost all of it) is made
                  with MUI
                </Typography>
              </Grid>
            </Container>
            <Container
              sx={{ backgroundColor: '#000814', borderRadius: '18px' }}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.6rem',
                    textAlign: 'center',
                    mr: '20px',
                    ml: '20px',
                    mt: '25px',
                  }}
                >
                  <StorageIcon /> Firebase Database / NodeJS
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    mr: '20px',
                    ml: '20px',
                    mt: '10px',
                  }}
                >
                  To handle the data and perform CRUD applications, we use
                  Firebase and Node JS
                </Typography>
              </Grid>
            </Container>
            <Container
              sx={{ backgroundColor: '#000814', borderRadius: '18px' }}
            >
              <Grid item md={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.6rem',
                    textAlign: 'center',
                    mr: '20px',
                    ml: '20px',
                    mt: '25px',
                  }}
                >
                  <LayersIcon sx={{ fontSize: 35 }} /> React Router
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    mr: '20px',
                    ml: '20px',
                    mt: '10px',
                  }}
                >
                  Used to handle a multi page application made with React JS
                </Typography>
              </Grid>
            </Container>
          </Container>
        </Container>
      </Grid>
      <Footer />
    </Card>
  );
}

// Will show if commited
