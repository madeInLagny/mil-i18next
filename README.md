# \<mil-i18next\>

'mil-i18next' is a javascript mixin that implements [i18next](https://www.i18next.com/) in webcomponents and litElements.
It provides translation upfront and lazy-loading and automatic language detection.

## Usage

### Install from npm

```sh
npm install --save mil-i18next
```

### Import to your webcomponent

```js
import { i18nMixin } from "mil-i18next";
```

### Extend your class

```js
class myClass extends i18nMixin(...)
```

### Optionnally override default properties

```js
constructor() {
    super();
    this.ns = ["app", "common", "notification"]; /* default: ["app"] */
    this.languageResources = '/path to translation files/{{lng}}/{{ns}}.json' /* default: '/assets/locales/{{lng}}/{{ns}}.json' */
    this.fallbackLng = "fr"; /* defaut: "en" */
    this.defaultNS = ["app"]; /* defaut: ["app"] */
    this.i18nextResources = {
      en: {
        app: {
          key1: "Translations keyed here will be loaded before i18next renders",
          key2: "Use language files for lazy-loading",
          }
      },
      fr: {
        app: {
          key1: "Les valeurs saisies ici seront chargées avant l'initialisation d'i18next",
          key2: "Les valeurs qui peuvent être chargées sans bloquer l'initialisation doivent être saisies dans les fichiers de traduction.",
         }
       }
    };
  }
```

Translation file load is asynchronous. Any translations that can be lazy-loaded should be keyed in translation files. To avoid unpleasant text flashing, all other translations should be keyed in 'this.i18nextResources'

### Use in your element

```js
${this.i18n.t("app:key1")}
```
