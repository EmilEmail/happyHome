import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from '../../../db/initializeDB';

interface ResponseData {
  message: string;
}

export default async function init(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await initializeApp();
    res.status(200).json({ message: 'restored' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something is wrooong' });
  }
}
