import i18next, { t as translate } from "i18next";
import backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
export { translate };

export const i18nMixin = baseClass =>
  class extends baseClass {
    static get properties() {
      return {
        /** Namespaces to be loaded. */
        ns: { type: Array },
        /**Keys to be loaded before i18next renders. */
        i18nextResources: { type: Object },
        /**Fallback language. */
        fallbackLng: { type: String },
        /**Default namespace. */
        defaultNS: { type: String },
        /**Path to translation files. */
        languageResources: { type: String },
        /**I18 object. */
        i18n: { type: Object }
      };
    }

    connectedCallback() {
      super.connectedCallback();

      this.i18n = i18next.createInstance();
      this.i18n.on("initialized", options => {
        this.requestUpdate();
      });
      this.i18n.on("languageChanged", options => {
        this.requestUpdate();
      });
      this.i18n
        .use(backend)
        .use(LanguageDetector)
        .init({
          debug: true,
          defaultNS: this.defaultNS || "app",
          ns: this.ns || ["app"],
          fallbackLng: this.fallbackLng || "en",
          partialBundledLanguages: true,
          resources: this.i18nextResources,
          backend: {
            loadPath:
              this.languageResources || "/bassets/locales/{{lng}}/{{ns}}.json"
          }
        });
    }

    /**
     * Changes language after initialisation.
     *
     * @param {String} lang Language to apply.
     */
    changeLanguage(lang) {
      this.i18n.changeLanguage(lang);
    }
  };
