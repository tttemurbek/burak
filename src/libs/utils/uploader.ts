import path from "path"; //core module
import multer from "multer"; // external package, which is primarily used for uploading files. 
import { v4 } from "uuid"; // external packagesm, Create a version 4 (random) UUID

/* MULTER IMAGE UPLOADER */
function getTargetImageStorage(address: any) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    filename: function (req, file, cb) {
      console.log(file); // yuklanayotgan file infosi
      const extension = path.parse(file.originalname).ext; // originalNamedi alip alip atirmiz
      const random_name = v4() + extension; // random nomber menen uploadsqa saqlap alip atirmiz
      cb(null, random_name);
    },
  });
}

const makeUploader = (address: string) => {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage });
};

export default makeUploader;

/*
const product_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    console.log(file); // yuklanayotgan file infosi
    const extension = path.parse(file.originalname).ext; // originalNamedi alip alip atirmiz
    const random_name = v4() + extension; // random nomber menen uploadsqa saqlap alip atirmiz
    cb(null, random_name);
  },
});

export const uploadProductImage = multer({ storage: product_storage });
*/
