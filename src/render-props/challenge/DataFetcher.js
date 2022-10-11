import React from "react";

class DataFetcher extends React.Component {
  state = {
    loading: false,
    data: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, loading: false }));
  }

  render() {
    return (
      <div>{this.props.children(this.state.data, this.state.loading)}</div>
    );
  }
}
export default DataFetcher;
