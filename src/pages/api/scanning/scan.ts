import { NextApiRequest, NextApiResponse } from 'next';
import { createWorker } from 'tesseract.js';

interface ResponseData {
  message: string;
}

export default async function init(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const test = async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize(
      'https://narrato.io/blog/wp-content/uploads/2024/05/9948c820beebba894855272c667c9ad6_11_43_05_28_05_2024.jpeg'
    );

    await worker.terminate();
    return ret.data.text;
  };
  const testsync = await test();
  console.log(testsync);
}
