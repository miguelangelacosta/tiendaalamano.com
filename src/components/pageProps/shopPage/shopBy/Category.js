import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [subCategoryState, setSubCategoryState] = useState({});

  const items = [
    {
      _id: 990,
      title: "New Arrivals",
      icons: true,
      subcategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    },
    {
      _id: 991,
      title: "Gudgets",
    },
    {
      _id: 992,
      title: "Accessories",
      icons: true,
      subcategories: ["Subcategory A", "Subcategory B"],
    },
    {
      _id: 993,
      title: "Electronics",
    },
    {
      _id: 994,
      title: "Others",
    },
  ];

  const toggleSubCategory = (_id) => {
    setSubCategoryState((prevState) => ({
      ...prevState,
      [_id]: !prevState[_id],
    }));
  };

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() => toggleSubCategory(_id)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
              {subCategoryState[_id] && (
                <ul className="pl-4">
                  {items.find((item) => item._id === _id)?.subcategories.map(
                    (subcat, index) => (
                      <li key={index}>{subcat}</li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
