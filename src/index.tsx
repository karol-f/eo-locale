import * as React from 'react';

import { EOLocaleDate } from './components/date';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext, IEOLocaleContext } from './context';
import { EOLocaleProvider } from './provider';
import * as utils from './utils';

export namespace EOLocale {
	export const Context: React.Context<IEOLocaleContext> = EOLocaleContext;

	export class Date extends EOLocaleDate {}
	export class Number extends EOLocaleNumber {}
	export class Provider extends EOLocaleProvider {}
	export class Text extends EOLocaleText {}

	export const formatMessage = utils.formatMessage;
	export const formatNumber = utils.formatNumber;
	export const formatDate = utils.formatDate;
}