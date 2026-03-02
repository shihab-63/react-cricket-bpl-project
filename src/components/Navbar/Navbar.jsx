import currency from "../../assets/Currency.png";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-7xl mx-auto px-0">
        <div className="flex-1">
          <img src={navLogo} alt="" />
        </div>
        <div className="flex-none">
          <button className="flex items-center gap-2 border border-gray-200 p-2 rounded-xl font-bold px-3">
            <span>0</span>
            <p>Coin</p>
            <img src={currency} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
