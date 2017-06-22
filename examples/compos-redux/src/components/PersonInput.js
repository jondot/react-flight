import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonInput extends Component {
  constructor(props) {
    super(props);

    this.onAddPersonClick = this.onAddPersonClick.bind(this);
  }

  onAddPersonClick() {
    const firstNameElement = document.getElementById('firstname');
    const lastNameElement = document.getElementById('lastname');

    this.props.addPerson({
      firstname: firstNameElement.value,
      lastname: lastNameElement.value
    });

    firstNameElement.value = "";
    lastNameElement.value = "";

    firstNameElement.focus();
  }

  componentDidMount() {
    document.getElementById('firstname').focus();
  }

  render() {
    return (
      <div>
        <input id="firstname" type="text" placeholder="First Name" />
        <input id="lastname" type="text" placeholder="Last Name" />
        <button onClick={this.onAddPersonClick}>Add Person</button>
      </div>
    );
  }
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;
