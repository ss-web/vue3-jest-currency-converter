import { Currency } from "@/types/Currency";

export async function fetchCurrencies(): Promise<Currency[]> {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    return Object.values(data.Valute);
  } catch (error) {
    console.error("Error fetching currencies:", error);
    return [];
  }
}
