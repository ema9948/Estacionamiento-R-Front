import React, { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import DateTableFilter from "./DateTableFilter";

const Modal = ({ close, data }) => {
  const [date, setDate] = useState(moment().format("L"));
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (date) => {
    setDate(moment(date.fecha).format("L"));
  };

  return (
    <div className="absolute backdrop-blur-md w-full h-full  flex flex-col justify-around  items-center z-20">
      <div className="w-full  flex  justify-end items-end">
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-5"
          onClick={() => close(false)}
        >
          Salir
        </button>
      </div>
      <div className=" w-5/6 h-5/6">
        <div className="w-full flex justify-center my-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-3/12 h-32 p-2 flex flex-col justify-between items-center bg-white rounded-md shadow-md shadow-gray-300 "
          >
            <label htmlFor="" className="text-xs font-extrabold">
              Fecha
            </label>
            <input
              {...register("fecha")}
              type="date"
              className="border-2 border-blue-400 rounded-md w-full text-center"
            />
            <button
              type="submit"
              className="inline-block px-6 py-1 border-2 border-blue-400 rounded-md active:bg-blue-100 w-full"
            >
              Filtrar
            </button>
          </form>
        </div>
        <div className="overflow-x-auto h-3/4 md:h-5/6 overflow-y-auto  rounded-md">
          <div className=" inline-block min-w-full ">
            <div className="overflow-hidden ">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Patente
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Tipo
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Ingreso
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Salida
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      horas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    if (moment(item.ingreso).format("L") === date)
                      return <DateTableFilter item={item} key={item?._id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
