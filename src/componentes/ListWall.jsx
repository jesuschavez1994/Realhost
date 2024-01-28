import { useState } from 'react';

export const ListWall = ({ onWallSelect }) => {
  const [selectedWall, setSelectedWall] = useState(null);

  const wallOptions = ['Wall1', 'Wall2', 'Wall3', 'Wall4'];

  const handleWallSelection = (wallName) => {
    setSelectedWall(wallName);
    onWallSelect(wallName);
  };

  return (
    <div style={{ position: 'absolute', top: '0' }}>
      {wallOptions.map((wallOption) => (
        <label key={wallOption}>
          <input
            type="radio"
            name="wall"
            value={wallOption}
            checked={selectedWall === wallOption}
            onChange={() => handleWallSelection(wallOption)}
          />
          {wallOption}
        </label>
      ))}
    </div>
  );
};
