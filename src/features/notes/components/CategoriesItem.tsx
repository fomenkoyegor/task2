import { FC } from "react";
import { ICategory } from "../interfaces/ICategory";

interface PropsItem {
  category: ICategory;
}

export const CategoriesItem: FC<PropsItem> = ({ category }) => {
  return (
    <div className="table-row bg-slate-200 hover:bg-slate-400">

      <div className="table-cell p-2 align-middle">
          <button className="bg-slate-800 text-white p-2 rounded-full inline-block mr-1">
              {category.icon()}
          </button>
          <span> {category.name}</span>
      </div>

      <div className="table-cell align-middle ">
          {category.active}
      </div>

      <div className="table-cell align-middle ">
          {category.archived}
      </div>
    </div>
  )
  return (
    <tr>
      <td>
        {category.icon()}
        <span> {category.name}</span>
      </td>
      <td>{category.active}</td>
      <td>{category.archived}</td>
    </tr>
  );
};
