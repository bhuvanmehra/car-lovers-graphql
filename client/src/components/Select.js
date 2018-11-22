import React from 'react';
import '../style/style.css'

const Select = ( props ) => {  
  const { label, onChange, optionItems } = props;
    return (
      <div>
        <label>{label}</label>
        <select className="browser-default select" onChange={onChange}>
          <option value='Please select'>Please select</option>
            {optionItems}
        </select> 
      </div>
    );
  };
  
  export default Select;
  