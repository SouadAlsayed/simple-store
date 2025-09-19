import { Button } from "../components/ui/button";

function Header() {
  return (
    <header className="[background-color:var(--color-cream)] flex justify-between items-center border-b-2 px-3 py-2">
      <div className="flex font-bold text-lg">Veloura</div>

      <nav className="flex justify-between items-center gap-10">
        <Button className="hover:text-[var(--color-rose)]" variant="link">
          Home
        </Button>
        <Button className="hover:text-[var(--color-rose)]" variant="link">
          Shop
        </Button>
        <Button className="hover:text-[var(--color-rose)]" variant="link">
          About
        </Button>
        <Button className="hover:text-[var(--color-rose)]" variant="link">
          Contact
        </Button>
      </nav>

      <Button
        variant="link"
        className="flex font-semibold hover:text-[var(--color-rose)]"
      >
        Cart
      </Button>
    </header>
  );
}

export default Header;
