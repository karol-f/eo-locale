import { EOLocaleDate } from './components/date';
import { EOLocaleHtml } from './components/html';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';

export { Translator } from './utils/translator';

export const EOLocale = {
	Context: EOLocaleContext,
	Date: EOLocaleDate,
	Html: EOLocaleHtml,
	Number: EOLocaleNumber,
	Provider: EOLocaleProvider,
	Text: EOLocaleText,
};