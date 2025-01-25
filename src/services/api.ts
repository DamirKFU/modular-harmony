import { API_CONFIG } from '@/config/api';
import { ProductResponse } from '@/types/api';

export const fetchProducts = async (): Promise<ProductResponse> => {
  const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.products}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};