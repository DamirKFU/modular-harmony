export interface ProductResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{
      id: number;
      name: string;
      image: string;
      price: number;
    }>;
  };
  message: string;
}