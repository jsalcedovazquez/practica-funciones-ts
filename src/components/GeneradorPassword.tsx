export const GeneradorPassword = () => {
    const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
        let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (incluirNumeros) caracteres += "0123456789";
        if (incluirSimbolos) caracteres += "!@#$%^&*()_+";

        let password = "";
        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            password += caracteres[indiceAleatorio];
        }
        return password;
    };

    return (
        <>
            <h3>Generador de Contraseñas</h3>
            <p>Básica (8): {generarPassword(8, false, false)}</p>
            <p>Media (12): {generarPassword(12, true, false)}</p>
            <p>Fuerte (16): {generarPassword(16, true, true)}</p>
        </>
    );
};