// tslint:disable:max-classes-per-file
import * as React from 'react';

import { EOLocaleDate } from './components/date';
import { EOLocaleHtml } from './components/html';
import { EOLocaleNumber } from './components/number';
import { EOLocaleText } from './components/text';
import { EOLocaleContext, IEOLocaleContext } from './context';
import * as polyfill from './polyfill';
import { EOLocaleProvider } from './provider';
import * as utils from './utils';

export namespace EOLocale {
	export const Context: React.Context<IEOLocaleContext> = EOLocaleContext;

	export class Date extends EOLocaleDate {}
	export class Number extends EOLocaleNumber {}
	export class Provider extends EOLocaleProvider {}
	export class Text extends EOLocaleText {}
	export class Html extends EOLocaleHtml {}

	export const convertObjectToMap = utils.convertObjectToMap;
	export const createMessageFormatter = utils.createMessageFormatter;
	export const formatDate = utils.formatDate;
	export const formatNumber = utils.formatNumber;
	export const isDefined = utils.isDefined;

	export const clientPolyfill = polyfill.clientPolyfill;
	export const serverPolyfill = polyfill.serverPolyfill;
}
