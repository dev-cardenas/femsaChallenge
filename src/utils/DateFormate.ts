import {format} from 'date-fns';
import es from 'date-fns/locale/es';

export const formattedDate = (date: string) =>
  format(new Date(date), "dd 'de' MMMM, yyyy", {locale: es});
