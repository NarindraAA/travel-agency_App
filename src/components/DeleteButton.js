// DeleteButton.js
import React from "react";
import Swal from "sweetalert2";

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda yakin ingin menghapus data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Hapus
    </button>
  );
};

export default DeleteButton;
