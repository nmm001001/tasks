import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <Form>
            <h3>Check Answer</h3>
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    placeholder="Enter your answer"
                    value={userAnswer}
                    onChange={handleInputChange}
                />
            </InputGroup>
            <div>
                {isCorrect ? (
                    <span style={{ color: "green" }}>✔️</span>
                ) : (
                    <span style={{ color: "red" }}>❌</span>
                )}
            </div>
        </Form>
    );
}
