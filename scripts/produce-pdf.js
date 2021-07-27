const puppeteer = require('puppeteer');

const printPDF = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume', {
    waitUntil: 'networkidle0',
  });

  const pdf = await page.pdf({
    format: 'a4',
    printBackground: true,
  });

  await browser.close();

  return pdf;
};

printPDF.then((pdf) => {
  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });

  res.send(pdf);
});
