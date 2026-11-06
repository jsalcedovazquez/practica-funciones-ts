export const EstadisticasArreglo = () => {
    const calcularPromedio = (nums: number[]): number => {
        if (nums.length === 0) return 0;
        const suma = nums.reduce((acc, curr) => acc + curr, 0);
        return suma / nums.length;
    };

    const encontrarMaximo = (nums: number[]): number => Math.max(...nums);

    const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

    const numeros: number[] = [8, 3, 15, 7, 22, 11, 4];

    return (
        <>
            <h3>Estadísticas</h3>
            <p>Números: [{numeros.join(", ")}]</p>
            <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
            <p>Máximo: {encontrarMaximo(numeros)}</p>
            <p>Mínimo: {encontrarMinimo(numeros)}</p>
        </>
    );
};