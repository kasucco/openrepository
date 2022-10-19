import React from "react";
import DetailList from "../components/DetailList";
import DetailReplies from "../components/DetailReplies";
import Layout from "../components/share/Layout";

const Detail = () => {
  return (
    <Layout>
      <DetailList />
      <DetailReplies />
    </Layout>
  );
};

export default Detail;
