import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApartments } from '../actions/apartment_actions';
import { filterApartments } from '../actions/filter_actions';
import { filterAll } from '../reducers/selectors';
import ApartmentDetail from './apartment_detail';

class ApartmentIndex extends Component {
  constructor(props, filteredApartments=[]) {
    super(props);
    this.filteredApartments = filteredApartments;
    this.state = {
      'beds': '0',
      'baths': '0'
    }
    this.newApartment = this.newApartment.bind(this);
    this.handleBeds = this.handleBeds.bind(this);
    this.handleBaths = this.handleBaths.bind(this);
    this.renderFilterButtons = this.renderFilterButtons.bind(this);
  }

  componentDidMount() {
    this.props.fetchApartments();
  }

  newApartment() {
    this.props.history.push('/new');
  }

  handleBeds(e) {
    this.state.beds = e.target.value;
    this.props.filterApartments();
    this.filteredApartments = this.props.filterAll(this.state.beds, this.state.baths, this.props.apartments);
  }

  handleBaths(e) {
    this.state.baths = e.target.value
    this.props.filterApartments();
    this.filteredApartments = this.props.filterAll(this.state.beds, this.state.baths, this.props.apartments);
  }


  renderFilterButtons() {
    return (
      <section className="buttons">
        <button id='new' onClick={this.newApartment}>Create New Apartment</button>
        <label className="filter"> Bedrooms:
          <select onChange={(e) => this.handleBeds(e)}>
            <option value='0'>Any</option>
            <option value='1'>1+</option>
            <option value='2'>2+</option>
            <option value='3'>3+</option>
            <option value='4'>4+</option>
            <option value='5'>5+</option>
          </select>
        </label>
        <label className="filter"> Bathrooms:
          <select onChange={(e) => this.handleBaths(e)}>
            <option value='0'>Any</option>
            <option value='1'>1+</option>
            <option value='2'>2+</option>
            <option value='3'>3+</option>
            <option value='4'>4+</option>
            <option value='5'>5+</option>
          </select>
        </label>
      </section>
    )
  }

  render() {
    const loadingApartments = this.props.loadingStatus.loadingApartments;
    if (!loadingApartments && Object.values(this.props.apartments).length > 0) {
      const apartments = this.props.apartments;
      const filtered = this.props.filtered.filtered;
      if (filtered) {
        return (
          <section>
            {this.renderFilterButtons()}
            <ul>
              {Object.values(this.filteredApartments).map(apartment => <ApartmentDetail key={apartment.id} apartment={apartment} />)}
            </ul>
          </section>
        )
      } else {
        return (
          <div>
            <h1>Apartments for Rent</h1>
            <h2>Free Apartment Finder</h2>
          <section>
            {this.renderFilterButtons()}
            <ul>
              {Object.values(apartments).map(apartment => <ApartmentDetail key={apartment.id} apartment={apartment} />)}
            </ul>
        </section>
      </div>
        )
      }
    } else {
      return (
        <div>loading</div>
      )
    }
  }
}

const mapStateToProps = ({ apartments, loadingStatus, filtered }) => {
  return {
    apartments,
    loadingStatus,
    filtered,
    filterAll
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
    filterApartments: () => dispatch(filterApartments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentIndex);
