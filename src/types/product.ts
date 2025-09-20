export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}
export interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
