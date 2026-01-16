import type { Announcement } from "@/types/announcement.types";
import Button from "@/components/react/ui/Button";
import Badge from "@/components/react/ui/Badge";



/**
 * Propiedades para el componente AnnouncementModal.
 * @interface Props
 * @property {boolean} isOpen - Determina si el modal es visible o no.
 * @property {() => void} onClose - Funcion para cerrar el modal.
 * @property {Announcement | null} item - Datos del Anuncio a mostrar o null si no hay ninguno seleccionado.
 */
interface Props {
    isOpen: boolean;
    onClose: () => void;
    item: Announcement | null;
}

/**
 * Modal para mostrar el detalle de un anuncio.
 * @component
 * @description Renderiza una ventana emergente con desenfoque de fondo que 
 * detalla la información del anuncio, especificamente la lista de logros.
 * @param {Props} props - Las propiedades del componente.
 * @returns {JSX.Element | null} El modal renderizado o null si isOpen es falso o no hay algun ítem seleccionado.
 * @remarks
 * - `backdrop-blur-sm` para el efecto de desenfoque en el fondo.
 * - Se reutilizó el componente Button con variante "danger" para el botón de cierre en la parte superior.
 * - La dificultad y potencial se muestran reutilizando el componente Badge con variantes "info" y "success".
 * - Se renderiza condicionalmente la sección de logros, si no hay logros, muestra un mensaje informativo.
 */

export default function AnnouncementModal({ isOpen, onClose, item }: Props) {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">

                <div className="p-6 border-b border-slate-100 flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                        <p className="text-sm text-slate-500">{item.dateLabel}</p>
                    </div>
                    <Button variant="danger" onClick={onClose}>Cerrar</Button>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Logros/Achievements</h4>
                    {item.achievements && item.achievements.length > 0 ?
                        <div className="grid gap-3">
                            {item.achievements.map((ach, index) => (
                                <div key={index} className="p-4 rounded-xl border border-slate-300 bg-slate-100">
                                    <p className="font-medium text-slate-900 text-base">{ach.name}</p>
                                    <div className="flex gap-2 mt-2">
                                        <Badge variant="info">Dificultad: {ach.difficulty}</Badge>
                                        <Badge variant="success">Potencial: {ach.potential}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <p className="text-sm text-slate-600">No hay logros disponibles para este anuncio.</p>
                    }
                </div>

            </div>
        </div>
    )
}