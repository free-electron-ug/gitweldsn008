import { useState, Fragment } from "react";
import { Stage, Layer, Arrow, Text, Line } from "react-konva";

function App() {
  const [blueNode, updateBlueNode] = useState([]);
  const [redNode, updateRedNode] = useState([]);
  const [blobs, setBlobs] = useState([]);
  const handelCreate = () => {
    setBlobs((prevBlobs) => [
      ...prevBlobs,
      {
        x: blobs.length * 100,
      },
    ]);

    console.log(blobs);
  };
  return (
    <>
      <button onClick={handelCreate}>Create</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {blobs.map((blob, i) => (
            <Fragment key={i}>
              <Arrow
                points={[
                  blueNode.x + 50 + blob.x,
                  blueNode.y + 50,
                  redNode.x - 30 + blob.x,
                  redNode.y + 25,
                  redNode.x + blob.x,
                  redNode.y + 25,
                ]}
                stroke="#000"
                fill="#000"
                strokeWidth={5}
                pointerWidth={6}
                opacity={0.5}
              />
              <Line
                x={100 + blob.x}
                y={100}
                fill="blue"
                points={[0, 0, 100, 0, 50, 100]}
                tension={0.5}
                opacity={0.5}
                closed="true"
                draggable="true"
                onDragMove={(e) => {
                  updateBlueNode({ ...blueNode, ...e.target.position() });
                  console.log(blueNode);
                }}
              />
              <Text
                x={190 + blob.x}
                Y={175}
                text="1"
                fontSize={50}
                fill="red"
                opacity={0.5}
                fontStyle="bold"
                draggable="true"
                onDragMove={(e) => {
                  updateRedNode({ ...redNode, ...e.target.position() });
                }}
              />
            </Fragment>
          ))}
        </Layer>
      </Stage>
    </>
  );
}
export default App;
