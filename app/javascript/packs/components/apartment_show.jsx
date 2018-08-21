import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchApartment
} from '../actions/apartment_actions';
import { Link } from 'react-router-dom';

class ApartmentShow extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchApartment(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchApartment(nextProps.match.params.id);
    }
  }

  handleEdit(e) {
    e.preventDefault;
    const apartment = this.props.currentApartment;
    this.props.history.push(`/${apartment.id}/edit`)
  }

  render() {
    const loadingApartment = this.props.loadingStatus.loadingApartment;
    if (!loadingApartment && Object.values(this.props.currentApartment).length > 0) {
      const apartment = this.props.currentApartment;
      return (
        <div className="show">
          <Link to="/" className="home">Home</Link>
          <section>
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
              beds: {apartment.bedroom_count}
            </span>
            <span>
              baths: {apartment.bathroom_count}
            </span>
            <button onClick={this.handleEdit}>edit</button>
          </section>
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
    loadingStatus
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
