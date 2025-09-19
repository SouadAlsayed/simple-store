import { Button } from "@/components/ui/button";

function HomeSection() {
  return (
    <section
      className="flex justify-center items-center flex-col gap-5 
        h-[calc(100vh-54px)]
         bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/bg.jpg')] 
         bg-cover bg-center"
    >
      <p className="max-w-2xl text-xl text-center text-[var(--color-cream)]">
        Welcome to <span className="font-semibold">Veloura Store</span> — your
        go-to destination for timeless women’s fashion in Egypt. Discover
        elegant clothing that blends comfort, style, and quality, delivered
        right to your doorstep across all areas in Egypt.
      </p>

      <Button
        size="lg"
        className="bg-[var(--color-charcoal)] text-[1rem] text-[var(--color-cream)] hover:bg-[var(--color-night)]"
      >
        Shop Here
      </Button>
    </section>
  );
}
export default HomeSection;
