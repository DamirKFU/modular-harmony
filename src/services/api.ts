import { API_CONFIG } from '@/config/api';
import { ProductResponse, CategoriesResponse, ColorsResponse } from '@/types/api';

interface FetchProductsParams {
  category?: string;
  color?: string;
  size?: string;
  page?: string;
}

export const fetchProducts = async (params?: FetchProductsParams): Promise<ProductResponse> => {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append('category', params.category);
  if (params?.color) queryParams.append('color', params.color);
  if (params?.size) queryParams.append('size', params.size);
  if (params?.page) queryParams.append('page', params.page);

  const url = `${API_CONFIG.baseURL}${API_CONFIG.endpoints.products}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.categories}`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const fetchColors = async (): Promise<ColorsResponse> => {
  const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.colors}`);
  if (!response.ok) {
    throw new Error('Failed to fetch colors');
  }
  return response.json();
};