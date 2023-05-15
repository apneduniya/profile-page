// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
  //   res.status(200).json({ name: 'John Doe' })
  // }


import puppeteer from "puppeteer";
  
const generatePDF = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({width: 2480, height: 4000});

  await page.goto('http://localhost:3000/download', { waitUntil: 'networkidle2' });  // At '/download' the download button for pdf will not be there

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Add a delay of 5 seconds before taking the snapshot
  await new Promise(resolve => setTimeout(resolve, 5000));

  const pdf = await page.pdf({ format: 'A4', printBackground: true });

  res.send(pdf);

  await browser.close();
};

export default generatePDF;
