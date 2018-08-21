import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApartments } from '../actions/apartment_actions';
import { filterApartments } from '../actions/filter_actions';
import { filterAll } from '../reducers/selectors';
import ApartmentDetail from './apartment_detail';

class ApartmentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'beds': '100',
      'baths': '100'
    }
    this.newApartment = this.newApartment.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.fetchApartments();
  }

  newApartment() {
    this.props.history.push('/new');
  }

  handleFilter(room, e) {
    this.setState({
      [room]: e.target.value
    });

  }

  renderFilterButtons() {
    return (
      <section>
        <button id='new' onClick={this.newApartment}>Create New Apartment</button>
        <label className="filter"> Bedrooms <br />
          <select onChange={(e) => this.handleFilter('beds', e)}>
            <option value='0'>Any</option>
            <option value='1'>1+</option>
            <option value='2'>2+</option>
            <option value='3'>3+</option>
            <option value='4'>4+</option>
            <option value='5'>5+</option>
          </select>
        </label>
        <label className="filter"> Bathrooms <br />
          <select onChange={(e) => this.handleFilter('baths', e)}>
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
      return (
        <section>
          {this.renderFilterButtons()}
          <ul>
            {Object.values(apartments).map(apartment => <ApartmentDetail key={apartment.id} apartment={apartment} />)}
          </ul>
      </section>
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
    loadingStatus,
    filtered: filterAll(100, 100, apartments)
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
