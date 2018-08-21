import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            {apartment.address}
          </span>
          <span>
            {apartment.city},
          </span>
          <span>
            {apartment.state}
          </span>
          <span>
            beds: {apartment.bedroom_count}
          </span>
          <span>
            baths: {apartment.bathroom_count}
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
