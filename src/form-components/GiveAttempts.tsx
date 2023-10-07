import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    const handleUseAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedRequestedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedRequestedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedRequestedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Give Attempts</h3>
                    <p>Attempts Left: {attemptsLeft}</p>
                    <Form.Group>
                        <Form.Control
                            type="number"
                            placeholder="Enter the number of attempts"
                            value={requestedAttempts}
                            onChange={handleRequestedAttemptsChange}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={handleUseAttempts}
                        disabled={attemptsLeft === 0}
                    >
                        Use
                    </Button>{" "}
                    <Button variant="success" onClick={handleGainAttempts}>
                        Gain
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
