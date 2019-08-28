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

### Optionally override default properties

```js
constructor() {
    super();
    this.i18NextNs = ["app", "common", "notification"];
    this.i18NextFilePath = '/path to translation files/{{lng}}/{{ns}}.json'
    this.i18NextFallbackLng = "fr";
    this.i18NextDefaultNS = ["app"];
    this.i18NextDebug = true;
    this.i18NextResources = {
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

Properties reflect [i18next configuration options]('https://www.i18next.com/overview/configuration-options')

| Property            | Type    | i18next Option      | Default                               |
| ------------------- | ------- | ------------------- | ------------------------------------- |
| `i18NextNs`                | Array   | `ns`                | ['app']                               |
| `i18NextFilePath` | String  | `languageResources` | '/assets/locales/{{lng}}/{{ns}}.json' |
| `i18NextFallbackLng`       | String  | `fallbackLng`       | 'en'                                  |
| `i18NextDefaultNS`         | String  | `defaultNS`         | ['app']                               |
| `i18NextDebug`             | Boolean | `debug`             | false                                  |
| `i18NextResources`  | Object  | `resources`         | {}                                    |

Translation file load is asynchronous. Any translations that can be lazy-loaded should be keyed in translation files. `this.i18NextFilePath` must be updated accordingly. To avoid unpleasant text flashing, all other translations should be keyed in `this.i18NextResources`

### Use in your element

```js
${this.i18n.t("app:key1")}
```
