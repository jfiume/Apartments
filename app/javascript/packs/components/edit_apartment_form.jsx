import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchApartment,
  updateApartment
} from '../actions/apartment_actions';

class EditApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      state: '',
      bathroom_count: '',
      bedroom_count: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    const apartment = {apartment: this.state}
    const id = this.props.match.params.id
    this.props.updateApartment(id, apartment);
  }

  componentDidUpdate(prevProps) {
    const loading = this.props.loadingStatus.startLoadingApartment
    if (!loading && prevProps.currentApartment !== this.props.currentApartment) {
      this.props.history.push(`/${this.props.currentApartment.id}`)
    }
  }

  update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

  render() {
    return (
      <form>
        <p>Please update the apartment</p>
        <label> address <br/>
        <input type="text"
          value={this.state.address}
          placeholder={this.props.currentApartment.address}
          onChange={this.update('address')}
        />
        </label>
        <label> city <br/>
        <input type="text"
          value={this.state.city}
          placeholder={this.props.currentApartment.city}
          onChange={this.update('city')}
        />
        </label>
        <label> state <br/>
        <input type="text"
          value={this.state.state}
          placeholder={this.props.currentApartment.state}
          onChange={this.update('state')}
        />
        </label>
        <label> bedrooms <br/>
        <input type="number"
          value={this.state.bedroom_count}
          onChange={this.update('bedroom_count')}
        />
        </label>
        <label> bathrooms <br/>
        <input type="number"
          value={this.state.bathroom_count}
          onChange={this.update('bathroom_count')}
        />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
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
    fetchApartment: id => dispatch(fetchApartment(id)),
    updateApartment: (id, apartment) => dispatch(updateApartment(id, apartment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditApartment)