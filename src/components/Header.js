export default function Header({children}) {
  return (
    <header>
      <h1>Demo Website</h1>
      <button>Toggle Theme</button>
      {children}
    </header>
  );
}
