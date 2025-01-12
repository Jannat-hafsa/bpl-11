const Banner = ({coins, setCoins}) => {
  
  
    const handleAddCoins = () => {
      setCoins(coins + 600000);
    };
  
    return (
      <div className="card w-10/12 m-auto bg-slate-800 shadow-xl">
        <figure>
          <img
            src="/src/assets/banner-main.png"
            alt="Cricket Team"
          />
        </figure>
        <div className="p-4 text-center">
          <h2 className=" text-2xl font-bold text-white ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-white">Beyond Boundaries Beyond Limits</p>
          <div className="mt-4">
            <button onClick={handleAddCoins} className="btn btn-primary">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  