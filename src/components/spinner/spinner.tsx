import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <span className="spinner"></span>
      <p className="spinner-text">Loading offers...</p>
    </div>
  );
}

export default Spinner;
