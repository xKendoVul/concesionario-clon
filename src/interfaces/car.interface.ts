export interface Car {
  id: number;
  model: string;
  description: string;
  year: number;
  stock: number;
  price: number;
  isAvailable: boolean;
  brand_id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface CarData {
  id: number;
  model: string;
  description: string;
  year: number;
  stock: number;
  price: number;
  isAvailable: boolean;
  brand_id: number;
}

export interface CarsResponse {
  data: Car[];
  total: number;
}