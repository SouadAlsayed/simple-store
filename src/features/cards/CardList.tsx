import { useProducts } from "@/context/ProductContext";
import CardItem from "./CardItem";
import ButtonLoading from "@/ui/ButtonLoading";
import Error from "@/ui/Error";

function CardList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <ButtonLoading />;
  if (error) return <Error />;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
}
export default CardList;
