const Header = (number) => {
  return (
    <div className="header">
      <h1>{number || "0"}</h1>
    </div>
  );
};
export default Header;
