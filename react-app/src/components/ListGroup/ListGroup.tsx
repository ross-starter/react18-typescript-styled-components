import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

//embed styles in component
const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 4px 0;
  border-bottom: 1px solid #dddddd;
  background: ${(props) => (props.active ? "blue" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    //implicity fragment ~ import { Fragment } from "react";
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found!</p>}

      <UnorderedList>
        {items.map((item, index) => (
          <ListItem
            active={index == selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default ListGroup;
