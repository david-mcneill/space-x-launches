import React, { Component } from "react";
import Launch from './Launch';
import styled from 'styled-components';

class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: {},
      error: false,
      errorMessage: ""
    }
  }

  componentDidMount() {
    const url = "https://api.spacexdata.com/v3/launches/latest";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          launch: data
        });
        console.log(data);
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message
        });
      })
  }

  render() {
    const { launch, error, errorMessage } = this.state;
    return (
      <div>
        {!error &&
          <Launch launch={launch} />
        }
      </div>
    )
  }
}

export default Latest;

export const Error = styled.p`
  color: red;
`