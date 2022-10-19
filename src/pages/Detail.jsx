import DetailList from "../components/DetailList";
import DetailReplies from "../components/DetailReplies";
import Layout from "../components/share/Layout";
import { useParams } from "react-router-dom";

const Detail = () => {
  return (
    <Layout>
      <DetailList />
      <DetailReplies />
    </Layout>
  );
};

export default Detail;
