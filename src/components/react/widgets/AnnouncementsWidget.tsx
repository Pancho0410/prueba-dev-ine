import { useMemo, useState } from "react";
import raw from "@/data/announcements.json";
import type { Announcement, Category } from "@/types/announcement.types";
import { SearchBar } from "@/components/react/features/announcements/SearchBar";
import { Filters } from "@/components/react/features/announcements/Filters";
import { AnnouncementsFeed } from "@/components/react/features/announcements/AnnouncementsFeed";

/**
 * Widget interactivo que combina búsqueda, filtros y visualización de anuncios.
 * 
 * @component
 * @description Este componente gestiona el estado de búsqueda y filtrado de anuncios,
 * proporcionando una interfaz interactiva completa. Está diseñado para funcionar como
 * una isla de Astro (Astro Island), permitiendo interactividad del lado del cliente.
 * 
 * @returns {JSX.Element} Un contenedor que incluye barra de búsqueda, filtros por categoría
 * y el feed de anuncios filtrados
 * 
 * @remarks
 * - Carga los anuncios desde un archivo JSON estático
 * - Utiliza hooks de React para gestionar el estado de búsqueda y filtros
 * - Implementa memorización (useMemo) para optimizar el filtrado de resultados
 * - Filtra por categoría y por términos de búsqueda en título y resumen
 */
export function AnnouncementsWidget() {
  const data = raw as Announcement[];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();

    return data
      .filter((x) => category === "all" || x.category === category)
      .filter(
        (x) =>
          !q ||
          x.title.toLowerCase().includes(q) ||
          x.summary.toLowerCase().includes(q)
      );
  }, [query, category, data]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SearchBar value={query} onChange={setQuery} />
          <Filters value={category} onChange={setCategory} />
        </div>
      </div>

      <AnnouncementsFeed items={items} />
    </div>
  );
}
