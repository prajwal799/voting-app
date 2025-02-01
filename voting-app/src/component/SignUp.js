import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox, Grid, Box } from '@mui/material';

const SignUpForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    address: '',
    aadharCardNumber: '',
    password: '',
    role: 'voter',
    isVoted: false,
  });

  // Handle change of input values
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log(formData);
    // Here, you would typically send the data to an API or backend server
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>

          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Age */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Mobile */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile"
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>

          {/* Aadhar Card Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Aadhar Card Number"
              variant="outlined"
              name="aadharCardNumber"
              type="number"
              value={formData.aadharCardNumber}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Role */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="voter">Voter</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* IsVoted (Checkbox) */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isVoted}
                  onChange={handleChange}
                  name="isVoted"
                />
              }
              label="Has Voted"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUpForm;
