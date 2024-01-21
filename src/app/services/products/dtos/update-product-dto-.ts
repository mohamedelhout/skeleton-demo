export interface UpdateProductRequest {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
}

export interface UpdateProductResponse {
  id: number;
}
