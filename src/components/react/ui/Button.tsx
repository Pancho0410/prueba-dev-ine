import type { ReactNode, ButtonHTMLAttributes } from "react";

/**
 * Variantes de estilo disponibles para el componente Button.
 *
 * @typedef {"primary" | "secondary" | "success" | "danger" | "ghost"} ButtonVariant
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "ghost";

/**
 * Propiedades del componente Button.
 *
 * @typedef {Object} ButtonProps
 * @property {ReactNode} children - El contenido del botón
 * @property {ButtonVariant} [variant="primary"] - La variante de estilo del botón
 */
type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Mapeo de variantes a sus clases CSS correspondientes.
 * @internal
 */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  success: "bg-emerald-600 text-white hover:bg-emerald-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
};

/**
 * Componente de botón reutilizable con múltiples variantes de estilo.
 *
 * @component
 * @description Botón personalizable que extiende las propiedades nativas de HTML button
 * y ofrece cinco variantes predefinidas de estilo. Incluye estilos de transición y
 * estados de enfoque accesibles.
 *
 * @param {ButtonProps} props - Las propiedades del componente
 * @param {ReactNode} props.children - El contenido que se mostrará dentro del botón
 * @param {ButtonVariant} [props.variant="primary"] - La variante de estilo del botón
 * @param {string} [props.className=""] - Clases CSS adicionales para personalización
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props...rest - Cualquier otra propiedad HTML de botón estándar
 *
 * @returns {JSX.Element} Un elemento button estilizado con la variante seleccionada
 *
 * @remarks
 * - Variante por defecto: "primary" (azul)
 * - Incluye transiciones suaves y anillo de enfoque para accesibilidad
 * - Las clases CSS adicionales se combinan con las clases base
 * - Compatible con todos los atributos HTML nativos de button (onClick, disabled, etc.)
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        "rounded-xl px-3 py-2 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        VARIANT_CLASSES[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
