import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li>
        {contact.name}: {contact.number}{' '}
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
