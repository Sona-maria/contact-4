import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Container,
  Box
} from '@mui/material';

const BirthdayReminder = () => {
  const [birthdayData, setBirthdayData] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('birthdays')) || [];
    setBirthdayData(data);
  }, []);

  const filteredData = birthdayData.filter(entry => {
    const matchesDate = searchDate ? entry.date === searchDate : true;
    const matchesName = searchName
      ? entry.name.toLowerCase().includes(searchName.toLowerCase())
      : true;
    return matchesDate && matchesName;
  });

  const handleSendGreeting = (entry) => {
    navigate('/Message', { state: entry });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-IAi52ztS18g1Xx31GJtBzW_lsA0V_Fagw&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 5
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 4,
          py: 4,
          px: 3
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'navy' }}>
          𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚 𝑹𝒆𝒎𝒊𝒏𝒅𝒆𝒓🗓️
        </Typography>

        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{
            marginBottom: '1rem',
            padding: '0.6rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '1rem'
          }}
        />
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          style={{
            marginBottom: '1.5rem',
            padding: '0.6rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '1rem'
          }}
        />

        <Grid container spacing={4} justifyContent="center">
          {filteredData.length > 0 ? (
            filteredData.map((entry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 6 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={entry.image}
                    alt={entry.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">{entry.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {entry.message || 'Wishing you a happy birthday!'}
                    </Typography>
                    <Typography variant="caption" display="block" mt={1}>
                      📅 {entry.date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleSendGreeting(entry)}
                    >
                      Send Greetings
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ mt: 2, width: '100%' }}>
              No birthdays found.
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default BirthdayReminder;