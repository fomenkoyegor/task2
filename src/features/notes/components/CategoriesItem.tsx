import { FC } from "react";
import { ICategory } from "../interfaces/ICategory";

interface PropsItem {
  category: ICategory;
}

export const CategoriesItem: FC<PropsItem> = ({ category }) => {
  return (
    <tr>
      <td>
        <i className="material-icons left">{category.icon}</i>
        <span> {category.name}</span>
      </td>
      <td>{category.active}</td>
      <td>{category.archived}</td>
    </tr>
  );
};
