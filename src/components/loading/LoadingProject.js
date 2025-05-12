import Spinner from "react-bootstrap/Spinner";

function LoadingProject() {
  return (
    <div className="loadingProject">
      <Spinner animation="grow"  className="Spinner"  />
    </div>
  );
}

export default LoadingProject;
