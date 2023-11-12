import { useSearchParams } from "next/navigation";
import Pagination from "./componets/Pagination";
import LatestIssues from "./LatestIssues";

export default function Home() {
  return <LatestIssues />;
}
