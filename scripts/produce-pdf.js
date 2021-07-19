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

/*

1. get the form data
2. on submit
  a. show alert for confirming
  b. store the form data in Context
  c. redirect to /resumePage route
3. on /resumePage route
  a. insert the data to resume fields from Context
  b. show a download link

*/
