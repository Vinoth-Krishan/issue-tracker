import dynamic from "next/dynamic";
import IssueFromSkeleton from "../_components/IssueFromSkeleton";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueFrom"), {
  ssr: false,
  loading: () => <IssueFromSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
