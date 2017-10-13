import React, { Component } from 'react';

class ListFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredData: this.props.data
    };
  }

  filterData(e) {
    e.preventDefault();
    const regex = new RegExp(e.target.value, 'i');
    const filtered = this.state.data.filter((post) => {
      return (datum.search(regex) > -1);
    });

    this.setState({
      filteredData: filtered
    });
  }

  render() {
    const { filteredData } = this.state;
    const items = filteredData.map((post) => {
      return (<li>{datum}</li>);
    });
  }

export default ListFilter;