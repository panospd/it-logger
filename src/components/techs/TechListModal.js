import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician list</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateTpProps = state => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading
  };
};

export default connect(
  mapStateTpProps,
  { getTechs }
)(TechListModal);
