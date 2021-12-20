import Carousel from "react-material-ui-carousel";
import { Typography, Button } from "@mui/material";

function Example(props) {
  // Call to action items, each item has its own page.
  var items = [
    {
      name: "1st Call to action title.",
      description: "1st Call to action description.",
    },
    {
      name: "2nd Call to action title.",
      description: "2nd Call to action description.",
    },
    {
      name: "3rd Call to action title.",
      description: "3rd Call to action description.",
    },
  ];

  return (
    <Carousel interval="10000">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  // Items component
  return (
    <div style={{ backgroundColor: "transparent", color: "white" }}>
      <Typography variant="h3">{props.item.name}</Typography>
      <Typography variant="h6">{props.item.description}</Typography>

      <Button className="CheckButton" style={{ color: "white" }}>
        Apply Now!
      </Button>
    </div>
  );
}

export default Example;
