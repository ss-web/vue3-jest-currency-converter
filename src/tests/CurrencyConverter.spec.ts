import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { createApp } from "vue";

import { i18n, setupI18n } from "../plugins/i18n";
import { useCurrencyStore } from "../store";
import CurrencyConverter from "../views/CurrencyConverter.vue";

describe("setupI18n", () => {
  it("should add $t to global Vue properties", () => {
    const app = createApp({});
    setupI18n(app);
    expect(app.config.globalProperties.$t).toBeDefined();
  });
});

describe("CurrencyConverter.vue", () => {
  let wrapper: ReturnType<typeof mount>;
  beforeEach(() => {
    // [🍍]: "getActivePinia()" was called but there was no active Pinia.
    setActivePinia(createPinia());

    wrapper = mount(CurrencyConverter, {
      global: {
        plugins: [i18n],
      },
    });

    wrapper.vm.$t = i18n.global.t;
  });

  it("renders the Converter title", () => {
    expect(wrapper.text()).toContain("Конвертер");
  });

  it("renders correctly", async () => {
    const mockCurrencies = [
      { CharCode: "USD", Name: "United States Dollar", Value: 1, Previous: 1 },
      { CharCode: "EUR", Name: "Euro", Value: 0.85, Previous: 0.87 },
    ];

    const mockFetchCurrencies = jest.fn(async () => {
      useCurrencyStore().currencies = mockCurrencies;
    });

    useCurrencyStore().fetchCurrencies = mockFetchCurrencies;

    useCurrencyStore().fetchCurrencies();

    await wrapper.vm.$nextTick();

    const options = wrapper.findAll("select option");
    expect(options.length).toBe(2);
    expect(options[0].text()).toBe("USD");
    expect(options[1].text()).toBe("EUR");
  });
});
