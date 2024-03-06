import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import s from "../Filter/Filter.module.css";

import { selectFilter } from "../../redux/filter/filterSelector";
import { filterContactAction } from "../../redux/filter/filterSlice";

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterInputId = nanoid(4);
  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id={filterInputId}
        value={filterValue}
        onChange={(e) => dispatch(filterContactAction(e.target.value))}
      />
    </div>
  );
};

export default Filter;
