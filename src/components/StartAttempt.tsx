import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <h3>Quiz Attempts: {attempts}</h3>
            <Button onClick={startQuiz} disabled={inProgress || attempts == 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
