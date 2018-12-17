import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "../giftlist.css";
import homes from "../home.jpg";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const getGiftQuery = gql`
  {
    gifts {
      name
      id
    }
  }
`;

class GiftList extends Component {
  displayGift() {
    const data = this.props.data;
    //console.log(data.gifts);
    if (!data.loading) {
      return data.gifts.map(gift => {
        return (
          <Card
            key={gift.id}
            style={{
              margin: "40px 10px",
              border: "1px solid #f2f2f2",
              width: "26rem",
              height: "31rem"
            }}
          >
            <CardImg
              style={{ width: "26rem", height: "25rem" }}
              src={homes}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{gift.name}</CardTitle>
              <p>Price: {gift.id}</p>
            </CardBody>
          </Card>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return <div className="gift-container">{this.displayGift()}</div>;
  }
}

export default graphql(getGiftQuery)(GiftList);
