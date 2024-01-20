import React, { useState } from "react";
import Select from "react-select";

const Popupform = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    // Tentukan field-form sesuai kebutuhan
    name: "",
    age: "",
    // ...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke parent component
    onSubmit(formData);
    // Tutup popup setelah submit
    onClose();
  };

  const options = [
    { value: "Laki-Laki", label: "Laki-Laki" },
    { value: "Perempuan", label: "Perempuan" },
  ];

  return (
    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-center h-screen bg-opacity-50 bg-gray-800">
        <div className="bg-white p-8 w-3/4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tambah Data Turis</h2>
          <form onSubmit={handleSubmit}>
            {/* Tambahkan field-form sesuai kebutuhan */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Negara Asal
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.negara}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                No.Passport
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.passport}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Jenis Kelamin
              </label>
              <Select
                placeholder="Laki-Laki"
                value={formData.jkel}
                onChange={handleChange}
                className="w-full rounded"
                options={options}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Umur
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            {/* ... */}
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={onClose}
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popupform;
