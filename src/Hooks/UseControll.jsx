import { useState } from "react";
import toast from "react-hot-toast";

const UseControll = () => {
  const [vehicles, setVehicles] = useState([]);
  const getVehicles = () => {
    const res = fetch(
      `${import.meta.env.VITE_URI}/api/v1/vehiculos/allVehiculos`
    )
      .then((res) => res.json())
      .then((res) => setVehicles([...res]));
  };

  const addVehicle = (data) => {
    if (data?.tipo === "Tipo de vehiculo")
      return toast.error("Tipo de vehiculo incorrecto.");
    console.log(data);
    const res = fetch(
      `$${import.meta.env.VITE_URI}/api/v1/vehiculos/addVehiculos`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => console.log(res))
      .finally(() => {
        getVehicles();
      });
  };

  const patchVehicle = (data) => {
    if (data?.tipo === "Tipo de vehiculo")
      return toast.error("Vehiculo ingresado incorrecto.");
    const res = fetch(
      `${import.meta.env.VITE_URI}/api/v1/vehiculos/patchVehiculos/${data?.id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        if (data?.nombre) {
          toast.success("Cambio Exitoso.");
        } else {
          return toast.success("Salida registrada");
        }
      })
      .finally(() => {
        getVehicles();
      });
  };

  const deleteVehicle = (id) => {
    const res = fetch(
      `${import.meta.env.VITE_URI}/api/v1/vehiculos/deleteVehiculos/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) return toast.success("Exito al Eliminar");
      })
      .finally(() => {
        getVehicles();
      });
  };

  return { getVehicles, addVehicle, patchVehicle, deleteVehicle, vehicles };
};

export default UseControll;
