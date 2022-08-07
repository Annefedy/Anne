import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, telephone, email, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{telephone}</td>
      <td>{email}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;