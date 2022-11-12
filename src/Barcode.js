import { useEffect, useState } from "react";
import { subscribe } from "./shareUtils";
import ReactBarcode from "react-barcode";
import ReactLoading from 'react-loading'

const Barcode = (props) =>  {
  const [value, setValue] = useState(() => props.value || '');

  useEffect(() => {
    subscribe((broadcastedValue) => setValue(broadcastedValue));
  }, [])

  if (!value) return (
    <ReactLoading type="spin" color="#c0c0c0" height={300} widht={300} />
  );

  return <ReactBarcode value={value} {...props} />;
};

export default Barcode;
