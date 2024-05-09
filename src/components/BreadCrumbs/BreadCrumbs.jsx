import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
const BreadCrumbs = () => {
  return (
    <div className="text-lg breadcrumbs">
      <ul>
        <li>
          <Link to="/">
            <GoHome />
          </Link>
        </li>
        <li>
          <a>Flashcard</a>
        </li>
        <li>
          <a>Mathematics</a>
        </li>
        <li>
          <a>Relation and Function</a>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
