import { useContext } from "react";
import { MyContext } from "../Context/Context";
import "./CatList.css";

// eslint-disable-next-line react/prop-types
function CatList({ icon, type }) {
  const { cartoons, setDisplay } = useContext(MyContext);

  const handleCategoryClick = () => {
    if (type == "All") {
      setDisplay(cartoons);
    } else {
      const filteredCartoons = cartoons.filter((cartoon) => {
        const check = cartoon.genre.map((genre) => genre === type);
        return check.some(Boolean);
      });
      setDisplay(filteredCartoons);
    }
  };

  return (
    <li
      className="d-flex align-items-center btn btn-outline-light list mb-2"
      onClick={handleCategoryClick}
    >
      <span className="me-2 icon">{icon}</span> {type}
    </li>
  );
}

export default CatList;
