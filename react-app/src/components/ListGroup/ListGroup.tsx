import { useState } from "react";
import "./ListGroup.css";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //implicity fragment ~ import { Fragment } from "react";
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found!</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
