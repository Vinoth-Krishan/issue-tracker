import Pagination from "./componets/Pagination";

export default function Home() {
  return <Pagination itemCount={100} pageSize={10} currentPage={10} />;
}
