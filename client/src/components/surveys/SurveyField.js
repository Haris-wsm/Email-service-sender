// SurveyField contains logic to render a single label and text input
import React from 'react';

export default function SurveyField({
  input,
  label,
  type,
  meta: { error, touched }
}) {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: '5px' }} {...input} type={type} />
      <div className="red-text" style={{ margin: '1rem 0' }}>
        {touched && error}
      </div>
    </div>
  );
}
