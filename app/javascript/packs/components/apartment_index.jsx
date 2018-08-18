import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApartments } from '../actions/apartment_actions';
import ApartmentDetail from './apartment_detail';

class ApartmentIndex extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchApartments();
  }

  render() {
    const loadingApartments = this.props.loadingStatus.loadingApartments;
    if (!loadingApartments && Object.values(this.props.apartments).length > 0) {
      const apartments = Object.values(this.props.apartments);
      return (
        <div>
          {apartments.map(apartment => <ApartmentDetail key={apartment.id} apartment={apartment} />)}
        </div>
      )
    } else {
      return (
        <div>loading</div>
      )
    }
  }
}

const mapStateToProps = ({ apartments, loadingStatus }) => {
  return {
    apartments,
    loadingStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentIndex);
