import React from "react";
import { useTable } from "../../Components/Models/useTable";

const Leads = () => {
  const attributes = [
   
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "business", label: "Business" },
    { id: "service", label: "Service" },
    { id: "phone", label: "Phone" },
    { id: "createdAt", label: "Created At" },
  ];

  
  const { tableUI } = useTable({  attributes, tableType: "Lead" });

  return <>{tableUI}</>;
};

export default Leads;
