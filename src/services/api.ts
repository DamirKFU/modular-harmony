import { API_CONFIG } from '@/config/api';
import { GarmentResponse } from '@/types/api';

export const fetchGarments = async (): Promise<GarmentResponse> => {
  const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.garments}`);
  if (!response.ok) {
    throw new Error('Failed to fetch garments');
  }
  return response.json();
};