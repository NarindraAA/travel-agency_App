import React, { useState } from "react";
import Popupform from "./Popupform";
import { FaPencilAlt, FaTrashAlt, FaPlus } from "react-icons/fa";

const tableData = [
  { id: 1, name: "John Doe", negara: "Polandia", passport: "A6758493", Jkel: "Laki-laki", age: 35 },
  { id: 2, name: "Eloise", negara: "Perancis", passport: "C76463945", Jkel: "Perempuan", age: 25 },
  { id: 3, name: "Gabriella", negara: "Nigeria", passport: "C6385638", Jkel: "Perempuan", age: 27 },
  { id: 4, name: "Aldway ", negara: "Indonesia", passport: "B535836", Jkel: "Laki-laki", age: 32 },
  { id: 5, name: "Elizabeth", negara: "Belanda", passport: "P65384957", Jkel: "Perempuan", age: 42 },
  { id: 6, name: "Arlen", negara: "Jerman", passport: "T158363", Jkel: "Perempuan", age: 53 },
  { id: 7, name: "Aloysius ", negara: "Bulgaria", passport: "J7305628", Jkel: "Laki-laki", age: 30 },
  { id: 8, name: "Grace", negara: "Swedia", passport: "O7394618", Jkel: "Perempuan", age: 28 },
  { id: 9, name: "Axton ", negara: "Italy", passport: "D7493628", Jkel: "Laki-laki", age: 29 },
  { id: 10, name: "Armstrong", negara: "Korea", passport: "P8364829", Jkel: "Laki-laki", age: 30 },

  // Tambahkan data tabel lainnya sesuai kebutuhan
];

const itemsPerPage = 5;

const Tabelturis = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleActionClick = (id) => {
  //   console.log(`Action clicked for item with ID: ${id}`);
  // };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [tabeldata, setTableData] = useState([]);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleAddData = (newData) => {
    setTableData((prevData) => [...prevData, newData]);
  };

  return (
    <div className="py-[25px] px-[25px] bg-[#f8f9fc] h-[5rem]">
      <div className="flex item-center justify-between">
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal">Tabel Turis</h1>
        <button
          onClick={handleOpenPopup}
          className="flex justify-center items-center bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-2 rounded mr-2 float-right"
        >
          <FaPlus className=" mr-2" />
          Tambahkan Turis
        </button>

        <Popupform isOpen={isPopupOpen} onClose={handleClosePopup} onSubmit={handleAddData} />
      </div>
      <div className="flex my-[22px] w-full">
        <div className="basis-[100%] border bg-white shadow-lg rounded-[4px] flex justify-center items-center">
          <div className="App container mx-auto my-8">
            <table className="min-w-full border table-auto border-collapse">
              <thead className=" bg-cyan-200">
                <tr>
                  <th className="border p-2">No</th>
                  <th className="border p-2">Nama</th>
                  <th className="border p-2">Negara Asal</th>
                  <th className="border p-2">No.Passport</th>
                  <th className="border p-2">Jenis Kelamin</th>
                  <th className="border p-2">Umur</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">{item.id}</td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.negara}</td>
                    <td className="border p-2">{item.passport}</td>
                    <td className="border p-2">{item.Jkel}</td>
                    <td className="border p-2">{item.age}</td>
                    <td className="border p-2 flex justify-center items-center">
                      <button
                        className="flex justify-center items-center bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-2 rounded mr-2"
                        // onClick={}
                      >
                        <FaPencilAlt className=" mr-2" />
                        Update
                      </button>
                      <button
                        className="flex justify-center items-center bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        // onClick={() => handleActionClick(item.id)}
                      >
                        <FaTrashAlt className=" mr-2" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="my-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-2 ${
                    currentPage === index + 1 && "bg-cyan-700"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabelturis;
