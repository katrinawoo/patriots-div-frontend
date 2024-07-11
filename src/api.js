import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; 

export const fetchTeamBios = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/team`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team bios:', error);
        throw error;
    }
};

export const fetchOpenPositions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/positions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching open positions:', error);
        throw error;
    }
};

export const fetchPositionById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/positions/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching position with id ${id}:`, error);
        throw error;
    }
};