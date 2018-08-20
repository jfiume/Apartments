import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchApartments } from '../actions/apartment_actions';

class ApartmentDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { apartment } = this.props;
    return (
      <li>
        <Link to={`/${apartment.id}`}>
          <span>
            address {apartment.address}
          </span>
          <span>
            city {apartment.city}
          </span>
          <span>
            state {apartment.state}
          </span>
          <span>
            bedrooms {apartment.bedroom_count}
          </span>
          <span>
            bathrooms {apartment.bathroom_count}
          </span>
      </Link>
      </li>
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
