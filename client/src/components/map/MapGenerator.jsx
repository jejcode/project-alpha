// import generatePopulatedChunk from "../../utilities/map/functions/create-populated-chunk";
import { useMemo, useContext, useEffect } from "react";
import generateMap from "../../utilities/map/map-engine";
import { getPlayer } from "../../entities/player/getPlayer";
import { playerStartCenter } from "../../utilities/map/functions/player-start-point";
import Row from "./tiles/Row";
import Tile from "./tiles/Tile";
import TileWall from "./tiles/TileWall";
// CSS Imports, Import all map CSS here
import "../../css/map/map-gen.css";
import "../../css/map/tiles.css";

const MapGenerator = () => {
  // generate a map based on three different algos: web, chain, or spoke
  const {randomMap, spawnPoints} = useMemo(() => generateMap(2, 2), []);

  // set player coordinates to get spawned into map
  // const player = useContext(getPlayer)
  // const {x,y} = playerStartCenter(randomMap)
  // player.setLocalCoordinates(x,y)
  return (
    <div id="map-container">
      {randomMap.map((row, rIndex) => {
        return (
          <Row key={rIndex}>
            {row.map((tile, cIndex) =>
              tile === 2 ? (
                <Tile
                  key={`r${cIndex}`}
                  tileCoords={{ tileX: cIndex, tileY: rIndex, spawnPoints: spawnPoints }}
                />
              ) : (
                <TileWall key={`r${cIndex}`} />
              )
            )}
          </Row>
        );
      })}
    </div>
  );
};

export default MapGenerator;
