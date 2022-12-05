import editIcon from "../icons/edit.svg";
import deletiIcon from "../icons/delete.svg";
const DateTable = ({ item, edit, deleti, patch }) => {
  if (item?.egreso) return;
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item?.nombre}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.patente}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.tipo.toUpperCase()}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.estado && "Activo"}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => edit({ id: item?._id })}
        >
          Salida
        </button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button>
          <img
            src={editIcon}
            alt=""
            className="w-5 mx-3"
            onClick={() => edit(item)}
          />
        </button>
        <button>
          <img
            src={deletiIcon}
            alt=""
            className="w-5"
            onClick={() => deleti(item?._id)}
          />
        </button>
      </td>
    </tr>
  );
};

export default DateTable;
