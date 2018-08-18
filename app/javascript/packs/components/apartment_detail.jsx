import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchApartments } from '../actions/apartment_actions';

class ApartmentDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { apartment } = this.props;
    return (
      <div>
        <span>
          {apartment.address}
        </span>
        <span>
          {apartment.city}
        </span>
        <span>
          {apartment.state}
        </span>
        <span>
          {apartment.bedroom_count}
        </span>
        <span>
          {apartment.bathroom_count}
        </span>
      </div>
    )
  }
}

const mapStateToProps = (ownProps) => {
  return {
    apartments: ownProps.apartments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentDetail);
