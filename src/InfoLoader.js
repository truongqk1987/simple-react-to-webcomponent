import { useEffect } from "react";
import { sendData } from "./shareUtils";


export default function VoucherInfoLoader() {

  useEffect(() => {
    setTimeout(() => {
      sendData('truongqk1987');
    }, 1500)
  }, [])

  return null;
}