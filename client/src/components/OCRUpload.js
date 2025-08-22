import React, { useState } from 'react';
import api from '../services/api';

export default function OCRUpload({ onParsed }) {
  const [loading, setLoading] = useState(false);

  const handleFile = async e => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('receipt', file);
    setLoading(true);
    try {
      const { data } = await api.post('/ocr', formData);
      onParsed(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      {loading && <p>Processing...</p>}
    </div>
  );
}
