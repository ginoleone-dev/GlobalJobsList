import './Pages.css';
import Footer from '../components/Footer';
import { styled } from '@mui/material/styles';

import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Container,
  Box,
  Paper,
} from '@mui/material';

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
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        height={'70vh'}
      >
        <Grid item xs={6} justifyContent="center" alignItems="stretch">
          <Typography
            sx={{
              fontSize: '2.5rem',
              textAlign: 'center',
              fontFamily: 'Inter',
              mt: '12px',
            }}
          >
            About GlobalJobsList <RocketLaunchIcon />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '1rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
            }}
          >
            Here are a couple of cool things about this app! Right now the main
            focus is moving the incoming jobs data from a JS file to Firebase so
            that CRUD operations can be performed on the job listings
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography
            sx={{
              fontSize: '1.8rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
            }}
          >
            <CodeIcon sx={{ fontSize: 35 }} /> React JS
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: '1rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
              mt: '10px',
            }}
          >
            Made with React JS, the styling (almost all of it) is made with MUI
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: '1.8rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
              mt: '10px',
            }}
          >
            <StorageIcon /> Firebase Database / NodeJS
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: '1rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
              mt: '10px',
            }}
          >
            To handle the data and perform CRUD applications, we use Firebase
            and Node JS
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography
            sx={{
              fontSize: '1.8rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
              mt: '10px',
            }}
          >
            <LayersIcon sx={{ fontSize: 35 }} /> React Router
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: '1rem',
              textAlign: 'center',
              mr: '20px',
              ml: '20px',
              mt: '10px',
            }}
          >
            Used to handle a multi page application made with React JS
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Card>
  );
}

// Will show if commited
