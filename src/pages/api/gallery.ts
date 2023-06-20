import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import { NextApiRequest, NextApiResponse } from 'next';

const getSortedFiles = async (dir: string) => {
  const files = await fs.promises.readdir(dir);
  return files
    .map((fileName) => ({
      name: fileName,
      time: fs.statSync(`${dir}/${fileName}`).mtime.getTime()
    }))
    .sort((a, b) => a.time - b.time)
    .map((file) => file.name);
};

const gallery = async (req: NextApiRequest, res: NextApiResponse) => {
  const dirRelativeToPublicFolder = 'gallery';
  const dir = path.resolve('./public/', dirRelativeToPublicFolder);
  const filenames = await getSortedFiles(dir);

  const images = filenames.map((name) => {
    const src = path.join('/', dirRelativeToPublicFolder, name);
    const dimensions = sizeOf(`./public/gallery/${name}`);
    const obj = {
      src: src,
      width: dimensions.width,
      height: dimensions.height
    };
    return obj;
  });

  res.statusCode = 200;

  res.json(images);
};

export default gallery;
