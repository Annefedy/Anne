import React, { useState, useEffect } from "react";




const initailForm = {
    name: "",
    telephone: "",
    email: "", 
   id: null
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Incomplete data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-semibold font-Montserrat">New contact</h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4" onSubmit={handleSubmit}>

      <input 
      value={form.name}
      onChange={handleChange} 
      type="text" 
      placeholder="Name" 
      className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" 
      />
        <input
          value={form.telephonephone} 
          onChange={handleChange}
          type="phone" 
          placeholder="Number Phone" 
          className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4"
        />
        <input 
          value={form.email} 
          onChange={handleChange}
          type="email"
          placeholder="Email" 
          className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4"
        
        />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm