export const AnalizadorTexto = () => {
    const contarPalabras = (texto: string): number => {
        const trimmed = texto.trim();
        return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    };

    const contarVocales = (texto: string): number => {
        const coincidencias = texto.match(/[aeiouáéíóú]/gi);
        return coincidencias ? coincidencias.length : 0;
    };

    const invertirTexto = (texto: string): string => {
        return texto.split("").reverse().join("");
    };

    const texto = "Hola mundo desde TypeScript";

    return (
        <>
            <h3>Analizador de Texto</h3>
            <p>Texto: "{texto}"</p>
            <p>Palabras: {contarPalabras(texto)}</p>
            <p>Vocales: {contarVocales(texto)}</p>
            <p>Invertido: {invertirTexto(texto)}</p>
        </>
    );
};