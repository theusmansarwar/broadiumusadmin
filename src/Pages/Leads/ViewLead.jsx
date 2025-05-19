import React, { useEffect, useState } from 'react';
import './Viewleads.css';
import { fetchSingleLeads } from '../../DAL/fetch';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../Utils/Formatedate';

const ViewLead = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchSingleLeads(id);
    setData(response.lead);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="email-container">
      <div className="email-header">
        <h2>New Lead Submission</h2>
        <p className="email-date">Received on: {formatDate(data.createdAt)}</p>
      </div>
      <div className="email-body">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
        <p><strong>Business:</strong> {data.business}</p>
        <p>
  <strong>Service:</strong>{" "}
  {data.service
    .split(", ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(", ")}
</p>

        <pre className='pretag'><strong>Query:</strong> {data.query}</pre>
      </div>
   
    </div>
  );
};

export default ViewLead;
