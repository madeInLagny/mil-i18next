import i18next from "i18next";
import backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const i18nMixin = baseClass =>
  class extends baseClass {
    static get properties() {
      return {
        i18NextNs: { type: Array },
        i18NextResources: { type: Object },
        i18NextFallbackLng: { type: String },
        i18NextDefaultNS: { type: String },
        i18NextFilePath: { type: String },
        i18NextDebug: { type: Boolean },
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
          debug: this.i18NextDebug || false,
          defaultNS: this.i18NextDefaultNS || "app",
          ns: this.i18NextNs || ["app"],
          fallbackLng: this.i18NextFallbackLng || "en",
          partialBundledLanguages: true,
          resources: this.i18NextResources,
          backend: {
            loadPath:
              this.i18NextFilePath || "/assets/locales/{{lng}}/{{ns}}.json"
          }
        });
    }

    changeLanguage(lang) {
      this.i18n.changeLanguage(lang);
    }
  };
