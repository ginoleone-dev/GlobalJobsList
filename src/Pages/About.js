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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function About() {
  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center">
      <Grid
        item
        xs={6}
        justifyContent="center"
        alignItems="stretch"
        height={80}
        mt={3}
      >
        <Typography
          sx={{
            fontSize: '2.5rem',
            textAlign: 'center',
            fontFamily: 'Inter',
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
            mt: '10px',
          }}
        >
          Here are a couple of cool things about this app!
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
          To handle the data and perform CRUD applications, we use Firebase and
          Node JS
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
  );
}

// Will show if commited
