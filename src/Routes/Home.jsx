import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import DateTable from "../components/DateTable";
import Modal from "../components/Modal";
import UseControll from "../Hooks/UseControll";

const Home = () => {
  const [editVehicle, setEditVehicle] = useState([]);
  const [modal, setModal] = useState(false);
  const { getVehicles, addVehicle, patchVehicle, deleteVehicle, vehicles } =
    UseControll();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getVehicles();
  }, []);
  const onSubmit = (data) => {
    addVehicle(data);
    reset();
  };
  const edit = (data) => {
    if (data?.id) {
      return patchVehicle(data);
    }
    return setEditVehicle(data);
  };
  return (
    <div className="h-screen w-full flex flex-col justify-between items-center bg-gray-200 relative">
      {modal && <Modal close={setModal} data={vehicles} />}
      <main className="w-full z-10">
        {/* //? title  */}
        <div className=" md:py-5 lg:py-5 text-3xl text-center font-extrabold">
          <h1>Estacionamiento R.</h1>
        </div>
        {/* //? add  */}
        <div className="flex justify-center items-center my-3 md:my-0">
          {editVehicle?._id ? (
            <form
              onSubmit={handleSubmit((data) => {
                patchVehicle(data);
                reset();
                setEditVehicle([]);
              })}
              className=""
            >
              <input
                type="text"
                className="hidden"
                {...register("id", setValue("id", editVehicle?._id))}
              />
              <div className="form-floating mb-1 xl:w-96 ">
                <input
                  {...register(
                    "nombre",
                    { required: "Campo requerido" },
                    setValue("nombre", editVehicle?.nombre)
                  )}
                  type="text"
                  className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Nombre"
                />
                <label htmlFor="floatingInput" className="text-gray-700">
                  Nombre
                </label>
              </div>
              <div className="form-floating mb-1 xl:w-96">
                <input
                  {...register(
                    "patente",
                    { required: "Campo requerido" },
                    setValue("patente", editVehicle?.patente)
                  )}
                  type="text"
                  className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Nombre"
                />
                <label htmlFor="floatingInput" className="text-gray-700">
                  Patente
                </label>
              </div>
              <div className=" mb-1 xl:w-96">
                <select
                  {...register("tipo", { required: "Campo requerido" })}
                  className="form-select form-select-sm
            appearance-none
            block
            w-full
            px-2
            py-1
            text-sm
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label=".form-select-sm example"
                >
                  <option>Tipo de vehiculo</option>
                  <option value={"auto"}>Auto</option>
                  <option value={"moto"}>Moto</option>
                </select>
              </div>
              <div className=" xl:w-96 ">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
                >
                  Editar
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-floating mb-1 xl:w-96 ">
                <input
                  {...register("nombre", { required: "Campo requerido" })}
                  type="text"
                  className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Nombre"
                />
                <label htmlFor="floatingInput" className="text-gray-700">
                  Nombre
                </label>
              </div>
              <div className="form-floating mb-1 xl:w-96">
                <input
                  {...register("patente", { required: "Campo requerido" })}
                  type="text"
                  className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Nombre"
                />
                <label htmlFor="floatingInput" className="text-gray-700">
                  Patente
                </label>
              </div>
              <div className=" mb-1 xl:w-96">
                <select
                  {...register("tipo", { required: "Campo requerido" })}
                  className="form-select form-select-sm
            appearance-none
            block
            w-full
            px-2
            py-1
            text-sm
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label=".form-select-sm example"
                >
                  <option>Tipo de vehiculo</option>
                  <option value={"auto"}>Auto</option>
                  <option value={"moto"}>Moto</option>
                </select>
              </div>
              <div className=" xl:w-96 ">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
                >
                  Agregar
                </button>
              </div>
            </form>
          )}
        </div>
        {/* //? Table  */}
        <div className="flex flex-col">
          <button
            type="button"
            className="md:mx-5 inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out self-end"
            onClick={() => setModal(true)}
          >
            Registro
          </button>

          {/* //? list  */}
          <div className="flex flex-col">
            <div className="overflow-x-auto  ">
              <div className="py-4 inline-block min-w-full ">
                <div className="overflow-hidden">
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
                          Estado
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
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicles &&
                        vehicles.map((item) => (
                          <DateTable
                            item={item}
                            key={item?._id}
                            deleti={deleteVehicle}
                            edit={edit}
                            patch={patchVehicle}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 text-xs md:text-md font-extrabold text-center lg:text-left w-full z-10">
        <div
          className="text-gray-700 text-center p-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
        </div>
        <Toaster />
      </footer>
    </div>
  );
};

export default Home;
