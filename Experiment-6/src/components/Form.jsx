import {
    TextField,
    Button,
    Typography,
    FormGroup,
    FormControlLabel,
    Radio,
    RadioGroup,
    Box,
    Grid,
    Divider,
    Card
} from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        phone: '',
        address: '',
        university: '',
        role: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (role) => {
        setFormData({ ...formData, role });
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const validate = () => {
        let temp = {};
        if (formData.name.length < 3)
            temp.name = 'Name must be at least 3 characters';
        if (!formData.dob)
            temp.dob = 'Date of Birth is required';
        else if (calculateAge(formData.dob) < 18)
            temp.dob = 'You must be at least 18 years old';
        if (!/^[0-9]{10}$/.test(formData.phone))
            temp.phone = 'Enter valid 10-digit phone number';
        if (formData.address.length < 5)
            temp.address = 'Address too short';
        if (formData.university.length < 3)
            temp.university = 'University name required';
        if (!formData.role)
            temp.role = 'Please select a role';

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            alert('🎉 Registration Successful!');
            console.log(formData);
            setTimeout(() => setSubmitted(false), 2000);
        }
    };

    return (
        <Box>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <PersonOutlineIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 1 }}>
                    Member Registration
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ maxWidth: 300, mx: 'auto' }}>
                    Complete your profile to get started with us
                </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                    {/* Personal Information Section */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.8rem' }}>
                            Personal Information
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                            InputProps={{
                                startAdornment: <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                            }}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Date of Birth"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputLabelProps={{ shrink: true }}
                            error={Boolean(errors.dob)}
                            helperText={errors.dob}
                            InputProps={{
                                startAdornment: <CakeIcon sx={{ mr: 1, color: 'primary.main' }} />
                            }}
                        />
                    </Grid>

                    {/* Contact Information Section */}
                    <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mt: 2, mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.8rem' }}>
                            Contact & Education
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.phone)}
                            helperText={errors.phone}
                            InputProps={{
                                startAdornment: <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            required
                            multiline
                            rows={2}
                            error={Boolean(errors.address)}
                            helperText={errors.address}
                            InputProps={{
                                startAdornment: <LocationOnIcon sx={{ mr: 1, color: 'primary.main', mt: 0.5 }} />
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="University Name"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.university)}
                            helperText={errors.university}
                            InputProps={{
                                startAdornment: <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                            }}
                        />
                    </Grid>

                    {/* Role Selection Section */}
                    <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mt: 2, mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.8rem' }}>
                            Select Your Role
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <RadioGroup
                            row
                            name="role"
                            value={formData.role}
                            onChange={(e) => handleRoleChange(e.target.value)}
                        >
                            <Card sx={{ flex: 1, p: 2, mr: 1.5, cursor: 'pointer', border: formData.role === 'Student' ? '2px solid' : '1px solid', borderColor: formData.role === 'Student' ? 'primary.main' : 'divider', backgroundColor: formData.role === 'Student' ? 'action.selected' : 'transparent', transition: 'all 0.3s' }}>
                                <FormControlLabel
                                    value="Student"
                                    control={<Radio size="small" />}
                                    label="👨‍🎓 Student"
                                    sx={{ m: 0 }}
                                />
                            </Card>
                            <Card sx={{ flex: 1, p: 2, mr: 1.5, cursor: 'pointer', border: formData.role === 'Professor' ? '2px solid' : '1px solid', borderColor: formData.role === 'Professor' ? 'primary.main' : 'divider', backgroundColor: formData.role === 'Professor' ? 'action.selected' : 'transparent', transition: 'all 0.3s' }}>
                                <FormControlLabel
                                    value="Professor"
                                    control={<Radio size="small" />}
                                    label="👨‍🏫 Professor"
                                    sx={{ m: 0 }}
                                />
                            </Card>
                            <Card sx={{ flex: 1, p: 2, cursor: 'pointer', border: formData.role === 'Independent' ? '2px solid' : '1px solid', borderColor: formData.role === 'Independent' ? 'primary.main' : 'divider', backgroundColor: formData.role === 'Independent' ? 'action.selected' : 'transparent', transition: 'all 0.3s' }}>
                                <FormControlLabel
                                    value="Independent"
                                    control={<Radio size="small" />}
                                    label="💼 Independent"
                                    sx={{ m: 0 }}
                                />
                            </Card>
                        </RadioGroup>
                        {errors.role && (
                            <Typography color="error" variant="caption" sx={{ display: 'block', mt: 1 }}>
                                {errors.role}
                            </Typography>
                        )}
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            size="large"
                            sx={{
                                mt: 3,
                                py: 1.8,
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                letterSpacing: 1,
                                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.6)'
                                }
                            }}
                        >
                            {submitted ? '✓ Registered!' : '✨ Complete Registration'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}