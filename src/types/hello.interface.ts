/**
 * Contrato del componente Hello.
 * Define el mensaje base y la función de saludo.
 */
export interface HelloInterface {
  /** Mensaje base que se muestra en el componente */
  message: string;

  /** Nombre de la persona a saludar*/
  name: string;

  /** Plantilla, usa {name} como placeholder */
  greetTemplate: string;
}