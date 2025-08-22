// Simple parser to extract amount, date and vendor from OCR text
module.exports = function parseOCR(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const amountRegex = /(\d+[,.]?\d*)\s?$/;
  const dateRegex = /(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/;
  let amount = 0;
  let date = new Date();
  let vendor = lines[0] || '';
  lines.forEach(line => {
    const aMatch = line.match(amountRegex);
    if (aMatch) amount = parseFloat(aMatch[1].replace(',', '.'));
    const dMatch = line.match(dateRegex);
    if (dMatch) date = new Date(dMatch[1]);
  });
  return { amount, date, vendor };
};
