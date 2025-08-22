const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const XLSX = require('xlsx');
const fs = require('fs');

async function exportCSV(transactions, path) {
  const csvWriter = createCsvWriter({
    path,
    header: [
      { id: 'amount', title: 'Amount' },
      { id: 'category', title: 'Category' },
      { id: 'date', title: 'Date' },
      { id: 'description', title: 'Description' }
    ]
  });
  await csvWriter.writeRecords(transactions);
  return path;
}

function exportXLSX(transactions, path) {
  const ws = XLSX.utils.json_to_sheet(transactions);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
  XLSX.writeFile(wb, path);
  return path;
}

module.exports = { exportCSV, exportXLSX };
