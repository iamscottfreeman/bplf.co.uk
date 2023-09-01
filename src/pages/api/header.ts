import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const getRandomImage = async (dir: string) => {
  const files = await fs.promises.readdir(dir);
  const fileNames = files.map((fileName) => fileName);
  const fileName = fileNames[Math.floor(Math.random() * fileNames.length)];
  return fileName === '00.jpg' ? '01.jpg' : fileName;
};

const headerImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const dir = path.resolve('./public/headers');
  const filename = await getRandomImage(dir);
  res.statusCode = 200;
  res.json(filename);
};

export default headerImage;
