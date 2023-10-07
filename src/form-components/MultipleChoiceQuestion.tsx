import React, { useState } from "react";
import { Form, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleClick = (option: string) => {
        setSelectedChoice(option);
    };

    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <Form>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Multiple Choice Question</Form.Label>
                <FormSelect
                    value={selectedChoice}
                    onChange={(e) => handleClick(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </FormSelect>
            </Form.Group>
            <div>Your answer: {selectedChoice}</div>
            <div>Correct answer: {expectedAnswer}</div>
            <div>Is correct: {isCorrect ? "✔️" : "❌"}</div>
        </Form>
    );
}
