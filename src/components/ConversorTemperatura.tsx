export const ConversorTemperatura = () => {
    const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

    const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

    const temperatura = 25;

    return (
        <>
            <h3>Conversor</h3>
            <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
            <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
        </>
    );
};