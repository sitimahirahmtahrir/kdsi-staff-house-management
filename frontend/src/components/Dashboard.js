import React, { useState, useEffect } from 'react';
import api from '../api';

function Dashboard() {
    const [houses, setHouses] = useState([]);
    const [maintenanceRequests, setMaintenanceRequests] = useState([]);
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const housesResponse = await api.get('/houses');
                setHouses(housesResponse.data);

                const maintenanceResponse = await api.get('/maintenance');
                setMaintenanceRequests(maintenanceResponse.data);

                const guestsResponse = await api.get('/guests');
                setGuests(guestsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <h3>Houses</h3>
                <ul>
                    {houses.map((house, index) => (
                        <li key={index}>{house.address} - {house.status}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Maintenance Requests</h3>
                <ul>
                    {maintenanceRequests.map((request, index) => (
                        <li key={index}>{request.description} - {request.status}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Guests</h3>
                <ul>
                    {guests.map((guest, index) => (
                        <li key={index}>{guest.name} - {guest.checkinDate} to {guest.checkoutDate}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;