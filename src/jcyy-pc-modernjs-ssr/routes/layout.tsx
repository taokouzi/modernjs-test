import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@modern-js/runtime/router";
import type { LoaderData } from "./layout.data";
import { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useModel } from "@modern-js/runtime/model";
import contacts from "../models/contacts";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "../styles/utils.css";
import "../../polyfill";

export default function Layout() {
  const { data } = useLoaderData() as LoaderData;
  const [{ items }, { setItems }] = useModel(contacts);
  if (items.length === 0) {
    setItems(data);
  }

  console.log(",,,,,,,,,,,,,,,,,,,,,,,,,");

  const navigate = useNavigate();
  const location = useLocation();
  const [currentList, setList] = useState(location.pathname || "/");
  const handleSetList = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setList(value);
    navigate(value);
  };

  return (
    <div>
      <div className="h-16 p-2 flex items-center justify-center">
        <Radio.Group onChange={handleSetList} value={currentList}>
          <Radio value="/">All</Radio>
          <Radio value="/archives">Archives</Radio>
        </Radio.Group>
      </div>
      <Outlet />
    </div>
  );
}
