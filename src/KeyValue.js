import React from "react";

export default React.forwardRef(
  ({ name, register, keyValidation, valueValidation }) => {
    return (
      <fieldset>
        <input type="text" name={`${name}.key`} ref={register(keyValidation)} />
        <input
          type="text"
          name={`${name}.value`}
          ref={register({ validate: valueValidation })}
        />
      </fieldset>
    );
  }
);
