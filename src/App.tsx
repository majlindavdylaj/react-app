import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [showAlert, setShowAlert] = useState(false);

  const onSelctedItem = (item: string) => {
    console.log(item);
  };

  function onClickButon() {
    setShowAlert(true);
  }

  function onClose() {
    setShowAlert(false);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelctedItem}>
        {showAlert && (
          <Alert onClose={onClose}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        )}
        <Button onClick={onClickButon}>Show Alert</Button>
        <Button color="success" onClick={onClickButon}>
          Click Me
        </Button>
      </ListGroup>
    </div>
  );
}

export default App;
