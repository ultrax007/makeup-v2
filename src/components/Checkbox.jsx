import React, { useState, useEffect } from "react";
import "../sass/Checkbox.sass";
import { useStateValue } from "./StateProvider";
import PropTypes from "prop-types";

/**
 * checkbox component for filters ☑
 *
 * @param {propType} props
 * @property {function}
 */
function Checkbox({ filterLabel, label }) {
  const [check, setCheck] = useState(false);
  const [
    { brandFiltersArray, tagFiltersArray, clearFilter },
    dispatch,
  ] = useStateValue();

  /**
   * handles the change of state of checkbox
   * also fires action for adding/removing filter from state
   *
   * @param {Object} event
   */
  const handleChange = (event) => {
    let item = {
      label: label,
    };
    setCheck(!check);
    if (event.target.checked) {
      if (filterLabel === "brands") {
        dispatch({
          type: "ADD_TO_BRAND_FILTER",
          item: item,
        });
      } else {
        dispatch({
          type: "ADD_TO_TAG_FILTER",
          item: item,
        });
      }
    } else {
      if (filterLabel === "brands") {
        dispatch({
          type: "REMOVE_FROM_BRAND_FILTER",
          item: item,
        });
      } else {
        dispatch({
          type: "REMOVE_FROM_TAG_FILTER",
          item: item,
        });
      }
    }
  };

  /**
   * side effect to check if filter already exists in the global state
   * if so then state of checkbox is decided accordingly.
   */
  useEffect(() => {
    if (brandFiltersArray.includes(label) || tagFiltersArray.includes(label)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [brandFiltersArray, tagFiltersArray, label]);

  /**
   * side effect reset checkbox state on clearFilter
   */
  useEffect(() => {
    setCheck(false);
  }, [clearFilter]);
  return (
    <label className="checkbox">
      <span className="checkbox__input">
        <input
          type="checkbox"
          name="checkbox"
          checked={check}
          onChange={(event) => handleChange(event)}
        />
        <span className="checkbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="white"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </span>
      <span className="checkbox__label">{!label ? "none" : label}</span>
    </label>
  );
}
Checkbox.prototype = {
  filterLabel: PropTypes.string,
  label: PropTypes.string,
};
export default Checkbox;
