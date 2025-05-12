import React from "react";




const NavProject = ({ allCat, showCategory }) => {
  return (
    <nav className="navProject">
      {allCat.map((category, index) => {
        const categoryClass = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;

        return (
          <div className="navButton_box" key={index}  onClick={() => showCategory(category)}>
          <img
          loading="lazy"
          src={`sources/img/${category}.png`}
          alt={`${category}`}
          className={`navButton_box_icon category_img ${category}`}
        />
            <button
              className={`navButton ${categoryClass}`}
             
            >
              <div  ></div>

           
              {category}
            </button>
          </div>
        );
      })}
    </nav>
  );
};

export default NavProject;
