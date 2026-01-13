import type { ReactNode } from "react";

/**
 * Variantes de estilo disponibles para el componente Badge.
 *
 * @typedef {"info" | "success" | "warning" | "danger"} BadgeVariant
 */
export type BadgeVariant = "info" | "success" | "warning" | "danger";

/**
 * Propiedades del componente Badge.
 *
 * @typedef {Object} BadgeProps
 * @property {ReactNode} children - El contenido del badge
 * @property {BadgeVariant} [variant="info"] - La variante de estilo del badge
 */
type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

/**
 * Mapeo de variantes a sus clases CSS correspondientes.
 * @internal
 */
const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  info: "bg-blue-50 text-blue-700 ring-blue-100",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  warning: "bg-amber-50 text-amber-700 ring-amber-100",
  danger: "bg-red-50 text-red-700 ring-red-100",
};

/**
 * Componente de badge (etiqueta) reutilizable con múltiples variantes de estilo.
 *
 * @component
 * @description Badge o insignia visual que se utiliza para mostrar información breve
 * como categorías, estados o etiquetas. Ofrece cuatro variantes predefinidas con
 * estilos de color distintos según el contexto.
 *
 * @param {BadgeProps} props - Las propiedades del componente
 * @param {ReactNode} props.children - El contenido que se mostrará dentro del badge
 * @param {BadgeVariant} [props.variant="info"] - La variante de estilo del badge
 *
 * @returns {JSX.Element} Un elemento span estilizado con forma redondeada y la variante seleccionada
 *
 * @remarks
 * - Variante por defecto: "info" (azul)
 * - Diseño redondeado con anillo sutil para mejor definición visual
 * - Tamaño de texto pequeño (xs) ideal para etiquetas compactas
 * - Las variantes incluyen: info (azul), success (verde), warning (ámbar), danger (rojo)
 */
export default function Badge({ children, variant = "info" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1",
        VARIANT_CLASSES[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
