import { useProducts } from "@/context/ProductContext";
import CartItem from "./CartItem";
import ButtonLoading from "@/ui/ButtonLoading";
import Error from "@/ui/Error";

function CartList() {
  const { cartItems, isLoading, error } = useProducts();

  if (isLoading) return <ButtonLoading />;
  if (error) return <Error />;
  return (
    <section className="grid gap-7 md:col-span-2">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
}
export default CartList;
