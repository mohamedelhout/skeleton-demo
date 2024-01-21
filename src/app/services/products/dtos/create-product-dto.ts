export interface CreateProductRequest {
  title: string;
  price: number;
  category: string;
  description: string;
}

export interface CreateProductResponse {
  id: number;
}
