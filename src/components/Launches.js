import React, { Component } from "react";
import SingleLaunch from './SingleLaunch';
import styled from 'styled-components';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: {},
      error: false,
      errorMessage: ""
    }
  }

  componentDidMount() {
    const launchType = this.props.type;
    const url = `https://api.spacexdata.com/v3/launches/${launchType}`;

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
        {!error ? (
          <SingleLaunch launch={launch} />
        ) : (
          <Error>There was an error: {errorMessage}</Error>
        )}
      </div>
    )
  }
}

export default Launches;

export const Error = styled.p`
  color: red;
`