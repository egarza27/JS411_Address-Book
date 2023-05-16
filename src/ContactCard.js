import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactCard(props) {
  const { user, name, first, last, picture, email, phone, location } = props;
  const [isHidden, setHide] = useState(true);

  const handleClick = () => {
    setHide(!isHidden);
  };

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="card" src={picture} alt="contact image" />
      <Card.Body>
        <Card.Title className="card-title" style={{ fontWeight: "bold" }}>
          {name.first} {name.last}
        </Card.Title>
        <Card.Text className="card-text">
          {isHidden ? (
            <div></div>
          ) : (
            <div>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>City: {location.city}</p>
              <p>State: {location.state}</p>
              <p>Country: {location.country}</p>
            </div>
          )}
        </Card.Text>
        <Button className="card-button" onClick={handleClick}>
          {isHidden ? "Show More" : "See Less"}
        </Button>
        <br></br>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
