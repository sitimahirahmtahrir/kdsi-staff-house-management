import React, { useState } from 'react';
import api from '../api';

function GuestManagement() {
    const [guestName, setGuestName] = useState('');
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/guests', {
                name: guestName,
                checkinDate,
                checkoutDate,
            });
            console.log('Guest registered:', response.data);
        } catch (error) {
            console.error('Error registering guest:', error);
        }
    };

    return (
        <div>
            <h2>Guest Management</h2>
            <form onSubmit={handleSubmit}>
                <label>Guest Name:</label><br />
                <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} /><br />
                <label>Check-in Date:</label><br />
                <input type="date" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} /><br />
                <label>Check-out Date:</label><br />
                <input type="date" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} /><br />
                <input type="submit" value="Register Guest" />
            </form>
        </div>
    );
}

export default GuestManagement;