import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    compName: '',
    catchPhrase: '',
    bs: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, formData);
      console.log('User updated:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Edit User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="username"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="street"
          name="street"
          label="Street"
          value={formData.street}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="suite"
          name="suite"
          label="Suite"
          value={formData.suite}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="city"
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="zipcode"
          name="zipcode"
          label="Zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="phone"
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="website"
          name="website"
          label="Website"
          value={formData.website}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="compName"
          name="compName"
          label="Company Name"
          value={formData.compName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="catchPhrase"
          name="catchPhrase"
          label="Catch Phrase"
          value={formData.catchPhrase}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="bs"
          name="bs"
          label="Business Strategy"
          value={formData.bs}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button component={Link} to="/" variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Cancel
        </Button>
      </form>
    </Container>
  );
}

export default Edit;
