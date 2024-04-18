import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-1 top-2 p-3 sm:right-10" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl text-darkBlue" icon={faBars} />
    </button>
  );
}

export default MobileMenuButton