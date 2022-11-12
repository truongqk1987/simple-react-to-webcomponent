import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import Barcode from './Barcode';
import InfoLoader from "./InfoLoader";

const VoucherBarcode = reactToWebComponent(Barcode, React, ReactDOMClient);
const VoucherInfoLoader = reactToWebComponent(
  InfoLoader,
  React,
  ReactDOMClient
);


customElements.define("voucher-barcode", VoucherBarcode);
customElements.define("voucher-info-loader", VoucherInfoLoader);