import useFetchJobs from "./useFetchjobs";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Job from "./Job";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error} = useFetchJobs()

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refeashing...</h1>}
      <h1>{jobs.length}</h1>
      {jobs.map(job => {
        return <Job key={job?.id} job={job} />
      })}
    </Container>
  );
}

export default App;
