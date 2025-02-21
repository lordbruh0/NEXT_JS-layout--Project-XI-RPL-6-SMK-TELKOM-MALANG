"use client";
import { Children, ReactNode } from "react";
import Sidebar from "./sidebar";
import { title } from "process";

type MenuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};

type ManagerProp = {
  children: ReactNode;
  id: string;
  title: string;
  menuList: MenuType[];
};

const CashierTamplate = ({ children, id, title, menuList }: ManagerProp) => {
  return (
    <div className="w-full min-h-dvh bg-slate-50">
      <Sidebar menuList={menuList} title={title} id={id}>
        {children}
      </Sidebar>
    </div>
  );
};

export default CashierTamplate;
