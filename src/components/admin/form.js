import React, { useContext } from 'react';
import Form from 'react-jsonschema-form';
import { PlayerContext } from '../context/playerContext';
// import { AdminContext } from '../context/adminContext';
import playersSchema from './playersSchema';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

const schemas = {
  players: playersSchema,
};

const AdminForm = () => {
  const playerContext = useContext(PlayerContext);
  // const adminContext = useContext(AdminContext);

  const handleSubmit = (form) => {
    const { formData } = form;

    if (parseInt(playerContext.id, 10) >= 0) {
      playerContext.handlePut({ formData });
    } else {
      playerContext.handlePost({ formData });
    }
  };

  return (
      <div>
        <h3>Edit Record {playerContext.id}</h3>
        <button onClick={playerContext.resetSelected}>Reset</button>
        <button onClick={() => playerContext.handleDelete(playerContext.id)}>Delete Player</button>
        <Form
          schema={schemas.players}
          uiSchema={uiSchema}
          // formData={this.props.records[this.props.model][playerContext.id]}
          formData={playerContext.selectedPlayer}
          onSubmit={handleSubmit}
        />
      </div>
  );
};

export default AdminForm;
