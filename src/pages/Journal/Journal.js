import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs"; // Ajusta la ruta de importación según tu estructura

const Journal = () => {
  const categories = [
    { id: "travel", name: "Travel" },
    { id: "food", name: "Food" },
    { id: "fitness", name: "Fitness" },
    // Agrega más categorías según sea necesario
  ];

  return (
    <div>
      <Breadcrumbs title="Journal" />
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/journal/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journal;
