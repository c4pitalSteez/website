import Box from "./Box";
import useWindowDimensions from "../hooks/WindowDimensions";

function BoxGrid() {
    const { width, height } = useWindowDimensions();
    const x = Math.ceil(width / 100);
    const y = Math.ceil(height / 110);
    const keys = Array.from({length: x * y } , (_, i) => "Box" + i);

    return (
        <>
            {keys.map((key, index) => (
                <Box key={key} position={[-2.5*Math.floor(x/2) + 2.7 * (index % x), 2.4*Math.floor(y/2) - 2.7 * Math.floor(index / x), -10]} />
            ))}
        </>
    );
}

export default BoxGrid;