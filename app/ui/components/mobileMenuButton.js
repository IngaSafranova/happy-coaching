import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-7 top-2 p-3" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl text-darkBlue" icon={faBars} />
    </button>
  );
}

export default MobileMenuButton