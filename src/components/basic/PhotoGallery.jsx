const PhotoGallery = ({ photos, error, loading }) => {
  const data = photos.posters;

  let one = null;
  if (data) {
    one = data[0];
  }

  if (error) return <div>{error}</div>;

  return (
    <>
      {one !== null && (
        <div className="d-none d-lg-block d-xl-block">
          <div className="row gallery-container">
            <div className="gallery-title">Posters</div>
            <div className="col-md-4 col-lg-4 gallery-left">
              <img src={`https://image.tmdb.org/t/p/w300/${one.file_path}`} />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="row gallery-right">
                {data.slice(1, 9).map((item) => (
                  <div key={item.file_path} className="col-md-3 col-lg-3 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
