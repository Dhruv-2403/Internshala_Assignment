import axios from 'axios';
import { mockInternshipsData } from './mockData';

const API_BASE_URL = 'https://internshala.com';
export const fetchInternships = async () => {
  try {
    // Fetch directly from Internshala API
    const response = await axios.get(`${API_BASE_URL}/hiring/search`, {
      timeout: 5000
    });
    
    const { internships_meta, internship_ids } = response.data;
    const internships = internship_ids.map(id => internships_meta[id]);
    
    console.log('✅ Fetched from live API:', internships.length, 'internships');
    return internships;
  } catch (error) {
    console.warn('⚠️ Live API failed, using cached data:', error.message);
    
    // Fallback to cached real API data
    const { internships_meta, internship_ids } = mockInternshipsData;
    const internships = internship_ids.map(id => internships_meta[id]);
    
    console.log('✅ Using cached data:', internships.length, 'internships');
    return internships;
  }
};
