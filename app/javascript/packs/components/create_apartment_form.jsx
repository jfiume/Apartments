import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createApartment
} from '../actions/apartment_actions';

class CreateApartment extends Component {
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
    const newApartment = {apartment: this.state}
    this.props.createApartment(newApartment);
  }

  componentDidUpdate(prevProps) {
    const loading = this.props.loadingStatus.startLoadingApartment
    if (!loading && prevProps.currentApartment !== this.props.currentApartment) {
      this.props.history.push('/')
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
        <p>Please input the new apartment</p>
        <label> address <br/>
        <input type="text"
          value={this.state.address}
          onChange={this.update('address')}
        />
        </label>
        <label> city <br/>
        <input type="text"
          value={this.state.city}
          onChange={this.update('city')}
        />
        </label>
        <label> state <br/>
        <input type="text"
          value={this.state.state}
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
    loadingStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createApartment: (apartment) => dispatch(createApartment(apartment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateApartment)
