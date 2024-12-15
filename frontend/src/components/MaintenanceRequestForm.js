import React, { useState } from 'react';
import api from '../api';

function MaintenanceRequestForm() {
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', description);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            const response = await api.post('/maintenance', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Maintenance request submitted:', response.data);
        } catch (error) {
            console.error('Error submitting maintenance request:', error);
        }
    };

    return (
        <div>
            <h2>Maintenance Request Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Description:</label><br />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />
                <label>Attach Photo:</label><br />
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} /><br />
                <input type="submit" value="Submit Request" />
            </form>
        </div>
    );
}

export default MaintenanceRequestForm;