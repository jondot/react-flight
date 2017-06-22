import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

const PeopleList = ({people}) => {
  return (
    <div>
      {people.map((person) =>
        <Person key={person.lastname} person={person} />
      )}
    </div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleList;
