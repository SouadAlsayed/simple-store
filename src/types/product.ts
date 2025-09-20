export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}
export interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
