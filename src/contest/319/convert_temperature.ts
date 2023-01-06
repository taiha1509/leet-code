function convertTemperature(celsius: number): number[] {
    return [
        Math.round((celsius + 273.15) * 100000) / 100000,
        Math.round((celsius * 1.80 + 32.00) * 100000) / 100000,
    ]
};