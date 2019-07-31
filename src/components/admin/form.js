import React from 'react';
import Form from 'react-jsonschema-form';

import playersSchema from './playersSchema';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' }
};

const schemas = {
  players: playersSchema,
};

const AdminForm = () => {

  handleSubmit = (form) => {
    const { formData } = form.formData;

    if (parseInt(this.props.id, 10) >= 0) {
      this.props.handlePut({
        id: this.props.id,
        model: this.props.model,
        record: formData,
      });
    } else {
      this.props.handlePost({ model: this.props.model, record: formData });
    }
  };

};

export default AdminForm;
