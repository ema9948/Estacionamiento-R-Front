import moment from "moment";
const DateTableFilter = ({ item }) => {
  const egreso = moment(item.egreso);
  const ingreso = moment(item.ingreso);
  const horas = moment.duration(egreso.diff(ingreso));
  console.log(moment().format());
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
        {moment(item.ingreso).format("lll")}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {moment(item.egreso).format("lll")}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {`${horas.hours() < 10 ? `0${horas.hours()}` : horas.hours()}: ${
          horas.minutes() < 10 ? `0${horas.minutes()}` : horas.minutes()
        }`}
      </td>
    </tr>
  );
};

export default DateTableFilter;
