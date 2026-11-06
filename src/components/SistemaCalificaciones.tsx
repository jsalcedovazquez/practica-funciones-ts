export const SistemaCalificaciones = () => {
    const calcularPromedio = (calificaciones: number[]): number => {
        if (calificaciones.length === 0) return 0;
        const suma = calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / calificaciones.length;
    };

    const obtenerLetra = (promedio: number): string => {
        if (promedio >= 90) return "A";
        if (promedio >= 80) return "B";
        if (promedio >= 70) return "C";
        if (promedio >= 60) return "D";
        return "F";
    };

    const estaAprobado = (promedio: number): boolean => promedio >= 70;

    interface Alumno {
        nombre: string;
        califs: number[];
    }

    const alumnos: Alumno[] = [
        { nombre: "Ana", califs: [95, 88, 92] },
        { nombre: "Luis", califs: [70, 65, 72] },
        { nombre: "María", califs: [85, 90, 88] },
    ];

    return (
        <>
            <h3>Sistema de Calificaciones</h3>
            {alumnos.map((alumno, i) => {
                const promedio = calcularPromedio(alumno.califs);
                const letra = obtenerLetra(promedio);
                const aprobado = estaAprobado(promedio);

                return (
                    <p key={i}>
                        {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} - {aprobado ? "Aprobado" : "Reprobado"}
                    </p>
                );
            })}
        </>
    );
};