import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasComponent = ({ uploadedImage, onExport }) => {
    const canvasRef = useRef();
    const [brushRadius, setBrushRadius] = useState(10);

    const saveMask = () => {
        const maskCanvas = canvasRef.current.canvasContainer.children[1];
        const maskData = maskCanvas.toDataURL("image/png");
        onExport(maskData);
        console.log(maskData, " mask set data ");
    };

    return (
        <div className="canvas-container">
            {/* Brush Size Section */}
            <div className="controls">
                <label>Brush Size: </label>
                <input
                    type="range"
                    min="5"
                    max="50"
                    value={brushRadius}
                    onChange={(e) => setBrushRadius(Number(e.target.value))}
                />
                <span>{brushRadius}px</span>
            </div>

            {/* Canvas Section */}
            <div className="canvas-wrapper">
                <CanvasDraw
                    ref={canvasRef}
                    canvasWidth={500}
                    canvasHeight={500}
                    imgSrc={uploadedImage}
                    brushColor="#FFFFFF"
                    lazyRadius={0}
                    brushRadius={brushRadius}
                    hideGrid
                    backgroundColor="#000000"
                    style={{
                        // border: "2px solid #4CAF50",
                        borderRadius: "10px",
                        marginBottom: "20px",

                    }}
                />
            </div>

            {/* Buttons Section */}
            <div className="button-container">
                <button onClick={() => canvasRef.current.clear()}>Clear</button>
                <button onClick={saveMask}>Export Mask</button>
            </div>
        </div>
    );
};

export default CanvasComponent;

