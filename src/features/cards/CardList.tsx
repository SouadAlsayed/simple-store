import { useProducts } from "@/context/ProductContext";
import CardItem from "./CardItem";
import ButtonLoading from "@/ui/ButtonLoading";
import Error from "@/ui/Error";

function CardList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <ButtonLoading />;
  if (error) return <Error />;
  return (
    <div className="grid grid-cols-3 gap-7">
      {products.map((product) => (
        <CardItem
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
}
export default CardList;
