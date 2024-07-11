import axios from 'axios';

const API_URL = 'http://localhost:8080/api/team'; // Make sure this URL points to your backend server

export const fetchTeamBios = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching team bios:', error);
        throw error;
    }
};
