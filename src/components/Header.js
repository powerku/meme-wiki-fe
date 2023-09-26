export default function Header({ children }) {
  return (
    <div
      className="header fixed top-0 left-0 right-0 mx-auto my-0 flex px-2"
      style={{ minWidth: "320px", maxWidth: "420px" }}
    >
      <div>Meme Wiki</div>
      <a className="ml-auto">Login</a>
    </div>
  );
}
