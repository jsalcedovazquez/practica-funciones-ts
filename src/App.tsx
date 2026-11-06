// App.tsx
// Importa y renderiza los 10 componentes de la práctica.
import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📚 Práctica de Funciones en TypeScript</h1>
      <Calculadora />
      <hr />
      <ConversorTemperatura />
      <hr />
      <CalculadoraIMC />
      <hr />
      <ValidadorEdad />
      <hr />
      <AnalizadorTexto />
      <hr />
      <EstadisticasArreglo />
      <hr />
      <GeneradorPassword />
      <hr />
      <AplicadorDescuentos />
      <hr />
      <SistemaCalificaciones />
      <hr />
      <CarritoCompras />
    </div>
  );
}

export default App;