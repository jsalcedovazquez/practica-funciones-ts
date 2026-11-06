export const CarritoCompras = () => {
    const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;

    const calcularIVA = (subtotal: number): number => subtotal * 0.16;

    const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);

    const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

    interface ItemCarrito {
        producto: string;
        precio: number;
        cantidad: number;
    }

    const carrito: ItemCarrito[] = [
        { producto: "Laptop", precio: 15000, cantidad: 1 },
        { producto: "Mouse", precio: 350, cantidad: 2 },
        { producto: "Teclado", precio: 800, cantidad: 1 },
    ];

    const subtotalGeneral = carrito.reduce(
        (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
        0
    );

    return (
        <>
            <h3>Carrito de Compras</h3>
            {carrito.map((item, i) => {
                const sub = calcularSubtotal(item.precio, item.cantidad);
                return (
                    <p key={i}>
                        {item.producto} x{item.cantidad} = {formatearPrecio(sub)}
                    </p>
                );
            })}
            <hr />
            <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
            <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
            <p><strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong></p>
        </>
    );
};