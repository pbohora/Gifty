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
const styles = {
  transition: "all 1s ease-out"
};
class GiftList extends Component {
  state = {
    opacity: 1,
    scale: 1,
    gifts: []
  };

  componentWillMount = () => {
    const data = this.props.data;
    console.log(this.props);
    if (!data.loading) {
      let gifts = [...this.state.gifts, data.gifts];
      this.setState({ gifts: gifts });
    }
  };
  onScale = id => {
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.3
    });
  };
  offScale = e => {
    this.setState({
      scale: 1,
      opacity: 1
    });
  };

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
