import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "../giftlist.css";

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

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
              margin: "70px",
              border: "1px solid #f2f2f2",
              width: "35vw",
              height: "30vw"
            }}
          >
            <CardImg
              style={{ width: "35vw", height: "30vw" }}
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{gift.name}</CardTitle>
              <CardSubtitle>Price: {gift.id}</CardSubtitle>
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
