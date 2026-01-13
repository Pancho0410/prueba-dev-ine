/**
 * Componente de React que muestra un mensaje de saludo personalizado.
 * 
 * @component
 * @param {HelloInterface} props - Las propiedades del componente
 * @param {string} props.name - El nombre que se insertará en la plantilla de saludo
 * @param {string} props.message - Un mensaje secundario que se muestra encima del saludo
 * @param {string} props.greetTemplate - Una cadena de plantilla que contiene el marcador de posición "{name}" que será reemplazado con el nombre real
 * 
 * @returns {JSX.Element} Un div estilizado que contiene el mensaje y el saludo personalizado
 */
import type { HelloInterface } from "@/types/hello.interface"

function HelloWidget({name, message, greetTemplate}: HelloInterface) {
  const greet = greetTemplate.replace("{name}", name);
  return (
    <div className="rounded-xl border p-4 shadow-sm">
        <p className="text-sm text-gray-500">{message}</p>
        <h2 className="mt-2 text-lg font-semibold">
            {greet}
        </h2>
    </div>
  )
}

export default HelloWidget