import { ReactNode, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  children: ReactNode;
}

function ListGroup({ items, heading, onSelectItem, children }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}

export default ListGroup;
