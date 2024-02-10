import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import {
  CheckCircleOutlineSharp,
  DangerousOutlined,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

//import useTimer from '../hooks/useTimer';

import './Tile.css';

export default function Tile(props) {
  const { title, actualArtist, artists /*, setBox*/ } = props;
  const [flipped, setFlipped] = useState(false);
  const [artistValue, setArtistValue] = useState('');
  const [songValue, setSongValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Who's singing?");
  const [submitted, setSubmitted] = useState(false);
  const [correctArtist, setCorrectArtist] = useState(false);
  const [correctSong, setCorrectSong] = useState(false);

  const [disabled, setDisabled] = useState(false);

  // Font size setter based on length of title
  const size = title.length > 10 ? 12 : 16;

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleChange = (event) => {
    setArtistValue(event.target.value);
    setHelperText('Lock it in!');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if spot prize

    // Check if artist is selected - done
    if (artistValue === '') {
      setHelperText('Please choose an artist');
      setError(true);
    } else {
      setHelperText('Lock it in!');
      setError(false);
      setSubmitted(true);
      // Check if artist is correct
      checkArtist();
      // Check if song is playing
      checkSong();
      saveTile();
      handleClick();
      //setBox(true);

      // Start timer to prevent people from over-submitting
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    }
  };

  const checkArtist = () => {
    const check = artistValue === actualArtist ? true : false;
    setCorrectArtist(check);
  };

  const checkSong = (song) => {
    // Will need to check against RDS
    // Tolerance of plus minus a minute maybe?
    // const currentSong value coming from RDS
    // Will need to replace "currentSong = title" with actual value
    const currentSong = title;
    const check = song === currentSong ? true : false;
    console.log('check: ', check);
    setCorrectSong(check);
  };

  const saveTile = () => {
    // Save tile to database
    console.log('saveTile');
  };

  const useStyles = makeStyles({ radioLabel: { fontSize: size } });
  const classes = useStyles();

  const renderArtists = artists.map((artist, id) => {
    //console.log(artist);
    return (
      <Typography key={id} sx={{ fontSize: size }}>
        <FormControlLabel
          value={artist}
          control={<Radio size="small" />}
          disabled={submitted}
          label={artist}
          onChange={handleChange}
          size="small"
          classes={{ label: classes.radioLabel }}
        />
      </Typography>
    );
  });

  const displayChosenArtist = () => {
    if (artistValue === '') {
      return;
    } else if (correctArtist) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {artistValue}
          <Box
            sx={{
              position: 'absolute',
              zIndex: 'tooltip',
            }}
          >
            <CheckCircleOutlineSharp
              style={{ color: alpha('#34eb4c', 0.2) }}
              sx={{
                fontSize: 150,
              }}
            />
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {artistValue}
          <Box
            sx={{
              position: 'absolute',
              zIndex: 'tooltip',
            }}
          >
            <DangerousOutlined
              style={{ color: alpha('#eb4334', 0.2) }}
              sx={{
                fontSize: 150,
              }}
            />
          </Box>
        </Box>
      );
    }
  };

  const displayBackTitle = () => {
    return (
      <FormLabel id="tile-song-title" sx={{ fontSize: size }}>
        {title}
      </FormLabel>
    );
  };

  return (
    <Box className={`flip-container ${flipped ? 'flipped' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className="flipper">
          <div className="front" onClick={handleClick}>
            <Card
              sx={{
                '&:hover': {
                  backgroundColor: 'grey',
                  boxShadow: 10,
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
                borderRadius: 3,
                height: 250,
                width: 200,
              }}
            >
              <CardContent>
                <Typography align="center" variant="h4" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {displayChosenArtist()}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="back">
            <Card
              sx={{
                border: 1,
                borderRadius: 3,
                height: 250,
                width: 200,
              }}
            >
              <CardContent>
                <FormControl error={error}>
                  {displayBackTitle()}
                  <RadioGroup
                    aria-labelledby="artists-radio-group-label"
                    name="radio-buttons-group"
                  >
                    {renderArtists}
                  </RadioGroup>
                  {!submitted && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
              </CardContent>
              <CardActions>
                <Button disabled={submitted} type="submit" variant="contained">
                  Submit
                </Button>
                <Button variant="outlined" onClick={handleClick}>
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </form>
    </Box>
  );
}
