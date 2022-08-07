import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable"


const initialDb = [
  {
    id: 1,
    name: "Anne",
    telephone: "19475",
    email: "annecarine1997@gmail.com",
    
  },
  {
    id: 2,
    name: "Carine",
    telephone: "65657",
    email: "carine1997@gmail.com",
   
  },
  {
    id: 3,
    name: "Ana",
    telephone: "112345",
    email: "ana@gmail.com",
  },
  {
    id: 4,
    name: "Fed",
    telephone: "64654",
    email: "fed@gmail.com",
  },
  {
    id: 5,
    name: "Fedna",
    telephone: "79499",
    email: "fedna@gmail.com",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you delete the record with the id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
    
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;