import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function Header() {
  return (
    <header className="[background-color:var(--color-cream)] flex justify-between items-center border-b-2 px-3 py-2">
      <Link to="/">
        <div className="flex font-bold text-lg">Veloura</div>
      </Link>

      <nav className="flex justify-between items-center gap-10">
        <Link to="/">
          <Button className="hover:text-[var(--color-rose)]" variant="link">
            Home
          </Button>
        </Link>
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

      <Link to="cart">
        <Button
          variant="link"
          className="flex font-semibold hover:text-[var(--color-rose)]"
        >
          Cart
        </Button>
      </Link>
    </header>
  );
}

export default Header;
