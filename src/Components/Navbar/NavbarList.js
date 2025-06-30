import FetchCategoryList from "./FetchCategoryList";

const NavbarList = () => {
  const categoryValues = FetchCategoryList();

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          All
        </a>
      </li>
      {categoryValues?.map((category) => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
