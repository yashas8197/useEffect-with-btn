import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error, fetchData } = useFetch(
    "https://randomuser.me/api/",
  );
  return (
    <div className="container my-4">
      <h1>Random User API</h1>
      <button className="btn btn-info" onClick={fetchData}>
        Get Random User
      </button>
      <div>
        {loading && "Loading..."}
        {error && <p>Something went wrong</p>}
        {data &&
          data.results.map((user) => (
            <>
              <p>
                <strong>Name: </strong>
                {user.name.first} {user.name.last}
              </p>
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
              <p>
                <strong>City: </strong>
                {user.location.city}
              </p>
            </>
          ))}
      </div>
    </div>
  );
}
