import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <p className="bg-slate-200 p-5 mr-5">Admin Sidebar</p>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
