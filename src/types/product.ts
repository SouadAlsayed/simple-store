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
  cartItems: Product[];
  isLoading: boolean;
  error: string | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  deleteFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
