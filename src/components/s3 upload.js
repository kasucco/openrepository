import { useState } from "react";
import AWS from "aws-sdk";

const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
const REGION = "ap-northeast-2";
const S3_BUCKET = "hanghae-react-week3";

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

export const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});
