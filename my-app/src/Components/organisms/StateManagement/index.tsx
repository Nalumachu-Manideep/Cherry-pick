import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { CustomTypography } from '../../atoms/CustomTypography';
import CustomButton from '../../atoms/Button';
import './index.css';
import { Grid } from '@mui/material';

const StateManagement = () => {
  const [value, setValue] = React.useState('one');
  const [currentlyReading, setCurrentlyReading] = React.useState([
    { id: 1, name: 'Stop Overthinking', author: 'Nick Trenton', image: 'https://m.media-amazon.com/images/I/51mZRRzwRzL._SY445_SX342_.jpg' },
    { id: 2, name: '11 Rules for Life', author: 'Chetan Bhagat', image: 'https://m.media-amazon.com/images/I/61E0unKRIZL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 3, name: 'MANIFEST', author: 'Roxie Nafous', image: 'https://m.media-amazon.com/images/I/715u7p+38+L._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Becoming Intelligent', author: 'Catherine Corrie', image: 'https://m.media-amazon.com/images/I/91eh-O04cEL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Meditations', author: 'Marcus Aurelius', image: 'https://m.media-amazon.com/images/I/81ZeeOjADFL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 4, name: 'Focus on what matters', author: 'Darious Forux', image: 'https://m.media-amazon.com/images/I/71cjI4kaaZL._SY522_.jpg' },
  ]);
  const [finished, setFinished] = React.useState([
    
    { id: 5, name: 'Who will cry when you die', author: 'Robin Sharma', image: 'https://m.media-amazon.com/images/I/71yu8CAKbgL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 6, name: 'Think & Grow Rich', author: 'Napoleon Hill', image: 'https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY327_FMwebp_QL65_.jpg' },
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const moveBookToFinished = (book) => {
    setCurrentlyReading(currentlyReading.filter((b) => b.id !== book.id));
    setFinished([...finished, book]);
  };

  const moveBookToCurrentlyReading = (book) => {
    setFinished(finished.filter((b) => b.id !== book.id));
    setCurrentlyReading([...currentlyReading, book]);
  };

  const renderBook = (book, onClick, buttonText) => (
    <Grid item xs={6} sm={4} md={3} lg={2} key={book.id} className="book-container">
      <img src={book.image} alt={book.name} className="book-image" />
      <div className="book-details">
        <CustomTypography variant="h6" label={book.name}></CustomTypography>
        <CustomTypography variant="subtitle1" label={book.author}></CustomTypography>
      </div>
      <CustomButton
        variant="contained"
        color="primary"
        className="book-button"
        onClick={() => onClick(book)}
        label={buttonText}
      ></CustomButton>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CustomTypography variant="h5" label="My Library"></CustomTypography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Currently Reading" />
            <Tab value="two" label="Finished" />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {value === 'one' && currentlyReading.map((book) =>
            renderBook(book, moveBookToFinished, 'Mark as Finished')
          )}
          {value === 'two' && finished.map((book) =>
            renderBook(book, moveBookToCurrentlyReading, 'Read Again')
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StateManagement;
