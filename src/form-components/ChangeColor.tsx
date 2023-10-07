import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                <Form.Group>
                    {colors.map((color) => (
                        <Form.Check
                            inline
                            key={color}
                            label={color}
                            type="radio"
                            id={color}
                            value={color} // Set the value attribute to the color
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                        />
                    ))}
                </Form.Group>
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor || "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white" // Set text color to white for better visibility
                }}
            >
                {selectedColor || "Select a color"}
            </div>
        </div>
    );
}
