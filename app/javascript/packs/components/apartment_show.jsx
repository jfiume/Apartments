import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchApartment
} from '../actions/apartment_actions';

class ApartmentShow extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchApartment(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchApartment(nextProps.match.params.id);
    }
  }

  render() {
    if (Object.values(this.props.currentApartment).length > 0) {
      const apartment = this.props.currentApartment;
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
    } else {
      return (
        <div>loading</div>
      )
    }
  }
}

const mapStateToProps = ({ apartments, loadingStatus }) => {
  return {
    currentApartment: apartments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApartment: id => dispatch(fetchApartment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentShow)
