import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './login.scss';
import { ROUTE_CONSTANTS } from '../../utils/appConstants';
import { isAuthenticated } from '../../redux/actions/userActions';
import { useState } from 'react';
import { setTypes } from '../../redux/actions/widgetsActions';
const Login = () => {
  const [userId, setUserId] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user);

  const handleSignIn = () => {
    dispatch(isAuthenticated(true));
    let payload;
    if (role === 'SuperAdmin') {
      payload = [
        {
          type: 'Table',
          title: 'User data',
          url: 'tableData',
        },
        {
          type: 'Chart',
          title: 'User Chat',
          url: 'chartData',
        },
      ];
    } else {
      payload = [
        {
          type: 'Table',
          title: 'User data',
          url: 'tableData',
        },
      ];
    }
    dispatch(setTypes(payload));
    navigate(ROUTE_CONSTANTS.DASHBOARD);
  };

  return (
    <Card className='container'>
      <Box className='formCard'>
        <form className='signForm'>
          <Typography
            variant='subtitle2'
            gutterBottom
            component='div'
            className='formTitle'
          >
            User Id
          </Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            type='email'
            className='formField'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Box className='textContainer'>
            <Typography
              variant='subtitle2'
              gutterBottom
              component='div'
              className='formTitle'
            >
              Password
            </Typography>
          </Box>
          <TextField
            id='outlined-basic'
            variant='outlined'
            type='password'
            className='formField'
          />
          <Button
            variant='contained'
            className='signBtn'
            sx={{ marginTop: '2rem' }}
            onClick={handleSignIn}
            data-testid='signin-btn'
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Card>
  );
};

export default Login;
