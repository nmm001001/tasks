import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "Diwali", emoji: "🪔", month: 3 },
        { name: "Easter", emoji: "🐰", month: 4 },
        { name: "Dragon Boat Festival", emoji: "🎏", month: 6 },
        { name: "Halloween", emoji: "🎃", month: 10 },
        { name: "Christmas", emoji: "🎄", month: 12 }
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const getNextHolidayAlphabetically = () => {
        const nextIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(nextIndex);
    };

    const getNextHolidayByYear = () => {
        const currentMonth = holidays[currentHolidayIndex].month;

        const nextHoliday = holidays.find(
            (holiday) => holiday.month > currentMonth
        );

        if (nextHoliday) {
            setCurrentHolidayIndex(holidays.indexOf(nextHoliday));
        } else {
            const firstHolidayAfterCurrentMonth = holidays.find(
                (holiday) => holiday.month > 0
            );
            if (firstHolidayAfterCurrentMonth) {
                setCurrentHolidayIndex(
                    holidays.indexOf(firstHolidayAfterCurrentMonth)
                );
            } else {
                setCurrentHolidayIndex(0);
            }
        }
    };

    return (
        <div>
            <p>Holiday: {holidays[currentHolidayIndex].emoji}</p>
            <Button onClick={getNextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
