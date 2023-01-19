import XernerxExtensionBuilder from 'xernerx-extension-builder';
import i18next, { InitOptions } from 'i18next';
import * as path from 'node:path';
import * as fs from 'node:fs';
interface Client {
	languages: Record<string, string>;
	translate: Function;
}

interface Options {
	directory: string;
}
export default class XernerxLanguage extends XernerxExtensionBuilder {
	client: Client;
	options: InitOptions | Options;

	constructor(client: Client, options: InitOptions | Options) {
		super('XernerxLanguage');

		this.client = client;

		this.client.languages = {};

		this.options = options as Options;

		i18next
			.init({
				lng: 'en',
			})
			.then((e) => console.log(e));

		this.#addBundles();
	}

	async #addBundles() {
		const files = fs.readdirSync(path.resolve((this.options as Options).directory));

		for (const file of files) {
			const language = await import('file://' + path.resolve((this.options as Options).directory) + '/' + file, { assert: { type: 'json' } });

			this.client.languages[file.replace('.json', '')] = file.replace('.json', '');
			//   ^?
			i18next;
		}
	}
}
