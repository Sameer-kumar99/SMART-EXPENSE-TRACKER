import React from 'react';
import api from '../services/api';

export default function ExportButton() {
  const download = async format => {
    const res = await api.get(`/export?format=${format}`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `transactions.${format}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="space-x-2">
      <button onClick={() => download('csv')} className="bg-green-500 text-white px-3 py-1">CSV</button>
      <button onClick={() => download('xlsx')} className="bg-green-500 text-white px-3 py-1">XLSX</button>
    </div>
  );
}
