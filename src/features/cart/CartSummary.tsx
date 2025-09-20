import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProducts } from "@/context/ProductContext";

function CartSummary() {
  const { cartItems } = useProducts();
  const totalPrice = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Card className="bg-[var(--gray-50)] p-7 h-fit">
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>

      <CardContent className="border-b-2">
        {cartItems.map((i) => (
          <p className="my-1" key={i.id}>
            {i.price}$ * {i.quantity}
          </p>
        ))}
      </CardContent>

      <CardFooter>
        <p>Total Price : {totalPrice}$</p>
      </CardFooter>
    </Card>
  );
}
export default CartSummary;
