import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

const getSortedFiles = async (dir: string) => {
  const files = await fs.promises.readdir(dir);
  return files
    .map((fileName) => ({
      name: fileName,
      time: fs.statSync(`${dir}/${fileName}`).mtime.getTime()
    }))
    .sort((a, b) => b.time - a.time)
    .map((file) => file.name);
};

const galleryImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const dir = path.resolve('./public/gallery');
  const filenames = await getSortedFiles(dir);
  const images = filenames.map((name) => {
    const src = path.join('/gallery', name);
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

export default galleryImages;
