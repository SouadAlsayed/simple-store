import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="[background-color:var(--color-cream)] flex justify-between items-center border-b-2 px-3 py-2 relative">
      <Link to="/">
        <div className="flex font-bold text-lg">Veloura</div>
      </Link>

      {/* Desktop */}
      <nav className="hidden sm:flex justify-between items-center gap-8">
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

      <Link to="cart" className="hidden sm:block">
        <Button
          variant="link"
          className="flex font-semibold hover:text-[var(--color-rose)]"
        >
          Cart
        </Button>
      </Link>

      {/* Mobile */}
      <button
        className="sm:hidden"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <nav
          className="absolute top-full left-0 w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-[3px]
         flex flex-col items-center gap-4 py-4 sm:hidden shadow-md z-50"
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <Button
              className="hover:text-[var(--color-rose)] text-[var(--color-cream)]"
              variant="link"
            >
              Home
            </Button>
          </Link>
          <Button
            className="hover:text-[var(--color-rose)] text-[var(--color-cream)]"
            variant="link"
          >
            Shop
          </Button>
          <Button
            className="hover:text-[var(--color-rose)] text-[var(--color-cream)]"
            variant="link"
          >
            About
          </Button>
          <Button
            className="hover:text-[var(--color-rose)]  text-[var(--color-cream)]"
            variant="link"
          >
            Contact
          </Button>
          <Link to="cart" onClick={() => setMenuOpen(false)}>
            <Button
              variant="link"
              className="flex font-semibold hover:text-[var(--color-rose)] text-[var(--color-cream)]"
            >
              Cart
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
