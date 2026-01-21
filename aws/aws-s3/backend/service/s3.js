import { v4 as uuid } from "uuid";
import { s3 } from "../config/aws.js";

export const uploadToS3 = async (file, isPublic) => {
  const folder = isPublic ? "images/public" : "images/private";

  const key = `${folder}/${uuid()}-${file.originalname}`;

  await s3.upload({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  }).promise();

  return key;
};

export const getSignedUrl = async (key) => {
  return s3.getSignedUrlPromise("getObject", {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Expires: 60, // 1 minute
  });
};
