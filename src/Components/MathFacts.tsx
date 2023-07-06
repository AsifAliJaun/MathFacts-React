import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MathFacts = () => {
  const classes = useStyles();
  const [result, setResult] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://numbersapi.com/random/math');
      setResult(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        style={{ marginTop: 30, textAlign: 'left', color: 'lightGreen' }}
      >
        Website is developed By ---{' '}
        <a
          href="https://asifalijaun.github.io/asifpersonal/"
          style={{ textDecoration: 'none', color: 'whitesmoke' }}
        >
          Asif Ali
        </a>
      </Typography>

      <div>
        <h1>Factor Expression</h1>
        <button onClick={fetchData}>Factor Expression</button>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default MathFacts;
