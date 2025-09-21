import CartSummary from "@/features/cart/CartSummary";
import CartList from "@/features/cart/CartList";

function CartView() {
  return (
    <section className="container my-12 mx-auto">
      <div className="px-7">
        <h2 className="text-3xl text-center mb-10">Cart</h2>

        <div className="items-start grid md:grid-cols-3 gap-7">
          <CartList />
          <CartSummary />
        </div>
      </div>
    </section>
  );
}
export default CartView;
