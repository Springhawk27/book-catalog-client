const BookCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title:</h2>
        <p>Author:</p>
        <p>Genre:</p>
        <p>Publication Date:</p>
        <div className="card-actions">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
