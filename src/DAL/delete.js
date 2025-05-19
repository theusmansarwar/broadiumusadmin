import { invokeApi } from "../Utils/InvokeApi";


export const deleteAllLeads = async (data) => {
  const reqObj = {
    path: `/leadsDelete`,
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};
