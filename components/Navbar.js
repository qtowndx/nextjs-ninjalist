import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1> Ninja Lisa </h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/Ninja Listing">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
}

export default Navbar;
