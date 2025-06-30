const FoodCard = ({ foodValue }) => {
  console.log(foodValue);

  return (
    <>
      {foodValue.map((item) => (
        <div className="col-md-3 mb-3" key={item.id}>
          <div className="card shadow-sm">
            <img src={item.image} className="card-img-top foodcard-img" alt={item.name} />
            <span class="badge text-bg-success position-absolute top-50 end-0 p-2">Price : {item.price}$</span>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text foodcard-text">
                {item.ingredients.join(' ,')}
              </p>
              <a href="#" className="btn btn-sm btn-outline-success">
               Add To Card
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCard;
