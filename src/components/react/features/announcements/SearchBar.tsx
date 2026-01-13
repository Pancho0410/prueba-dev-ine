/**
 * Componente de barra de búsqueda para filtrar anuncios por texto.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {string} props.value - El valor actual del campo de búsqueda
 * @param {(value: string) => void} props.onChange - Función callback al cambiar el texto
 * @returns {JSX.Element} Input de búsqueda con etiqueta
 */
export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-xs font-medium text-slate-700">Buscar</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título o descripción..."
        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-200 focus:ring-2"
      />
    </div>
  );
}
