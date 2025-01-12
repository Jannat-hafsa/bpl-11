import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Players = ({coins, setCoins}) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isSelected, setIsSelected] = useState(false); // Toggle between available and selected players
  const [showAddMoreButton, setShowAddMoreButton] = useState(false); // Show the Add More Players button

  // Fetch player data
  useEffect(() => {
    fetch("/src/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
  }, []);

  // Handle "Choose Player" button click
  const handleButton = (player) => {
    if (selectedPlayers.length === 6) {
      toast.error("You can only select up to 6 players.");
      return;
    }

    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error(`${player.name} is already selected.`);
      return;
    }

    if (coins < player.price) {
      toast.error("Not enough coins to select this player.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price); // Deduct player's price from coins
    setShowAddMoreButton(true);
    toast.success(`${player.name} has been selected!`);
  };

  // Handle "Remove Player" button click
  const handleRemovePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== player.playerId));
    setCoins(coins + player.price); // Add player's price back to coins
    toast.info(`${player.name} has been removed from your selection.`);
  };

  // Handle "Add More Players" button click
  const handleAddMorePlayers = () => {
    setIsSelected(false); // Switch back to the available players view
    setShowAddMoreButton(false);
    toast.info("You can now add more players!");
  };

  return (
    <div className="mt-5">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header Section */}
      <div className="flex flex-1 w-11/12 m-auto justify-between items-center">
        <h2 className="font-bold text-2xl">Available Players</h2>
        <div className="gap-5 flex">
          <button
            className="btn btn-primary"
            onClick={() => setIsSelected(false)} // Show Available players
          >
            Available
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsSelected(true)} // Show Selected players
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      {/* Display Available or Selected Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 m-auto gap-4 mt-5">
        {isSelected ? (
          // Show Selected Players
          selectedPlayers.length > 0 ? (
            selectedPlayers.map((player) => (
              <div
                key={player.playerId}
                className="card w-80 bg-white shadow-xl p-4 rounded-lg"
              >
                {/* Player Image */}
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                {/* Player Details */}
                <div className="mt-4">
                  <h2 className="font-bold text-gray-500 text-lg">{player.name}</h2>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{player.country}</p>
                    <div className="badge badge-primary mt-2">{player.role}</div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Additional Details */}
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm font-semibold">Batting Style</p>
                    <p className="text-sm text-gray-500">{player.battingStyle}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm font-semibold">Bowling Style</p>
                    <p className="text-sm text-gray-500">{player.bowlingStyle}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Price</p>
                    <p className="text-sm text-gray-500">${player.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemovePlayer(player)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No players selected yet.</p>
          )
        ) : (
          // Show Available Players
          players.length > 0 ? (
            players.map((player) => (
              <div
                key={player.playerId}
                className="card w-80 bg-white shadow-xl p-4 rounded-lg"
              >
                {/* Player Image */}
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                {/* Player Details */}
                <div className="mt-4">
                  <h2 className="font-bold text-gray-500 text-lg">{player.name}</h2>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{player.country}</p>
                    <div className="badge badge-primary mt-2">{player.role}</div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Additional Details */}
                <div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm font-semibold">Batting Style</p>
                    <p className="text-sm text-gray-500">{player.battingStyle}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm font-semibold">Bowling Style</p>
                    <p className="text-sm text-gray-500">{player.bowlingStyle}</p>
                  </div>
                </div>
                {/* Choose Player Button */}
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Price</p>
                    <p className="text-sm text-gray-500">${player.price}</p>
                  </div>
                  <button
                    onClick={() => handleButton(player)}
                    className={`btn btn-primary ${coins < player.price ? "btn-disabled" : ""}`}
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No players available at the moment.
            </p>
          )
        )}
      </div>

      {/* Add More Players Button */}
      {showAddMoreButton && isSelected && (
        <div className="mt-5 flex justify-center">
          <button onClick={handleAddMorePlayers} className="btn btn-secondary">
            Add More Players
          </button>
        </div>
      )}
    </div>
  );
};

export default Players;
