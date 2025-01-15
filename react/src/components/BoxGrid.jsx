import Box from "./Box";
import useWindowDimensions from "../hooks/WindowDimensions";

function BoxGrid() {
    const { width, height } = useWindowDimensions();
    const cubeSize = 350;
    const x = Math.ceil(2*width / cubeSize);
    const y = Math.ceil(2*height / cubeSize);
    const keys = Array.from({length: x * y } , (_, i) => "Box" + i);

    return (
        <>
            {keys.map((key, index) => (
                <Box 
                    key={key} 
                    position={[-2.5*Math.floor(x/2) + 2.7 * (index % x), 2.7*Math.floor(y/2) - 2.7 * Math.floor(index / x), -1/cubeSize * 1000]}
                    rotation={[0, index / x / 6.28, 0]}
                />
            ))}
        </>
    );
}

export default BoxGrid;