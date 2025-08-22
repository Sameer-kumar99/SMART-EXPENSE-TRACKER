const Tesseract = require('tesseract.js');
const parseOCR = require('../utils/ocrParser');

exports.processReceipt = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400);
      throw new Error('No file uploaded');
    }
    const result = await Tesseract.recognize(req.file.path, 'eng');
    const parsed = parseOCR(result.data.text);
    res.json(parsed);
  } catch (err) {
    next(err);
  }
};
