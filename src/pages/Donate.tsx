import { useState, useCallback } from "react";
import DonateHero from "@/sections/donate/DonateHero";
import DonateForm from "@/sections/donate/DonateForm";
import { useExchangeRate } from "@/lib/exchange";
import "@/styles/tmf-premium-pages.css";

type Currency = "USD" | "NGN";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const rate = useExchangeRate();

  const handleSelectAmount = useCallback((value: number) => {
    setAmount(value.toLocaleString());
  }, []);

  const handleCurrencyChange = useCallback((c: Currency) => {
    setCurrency(c);
    setAmount("");
  }, []);

  return (
    <main className="tmf-page-scope">
      <DonateHero
        currency={currency}
        onSelectAmount={handleSelectAmount}
        rate={rate}
      />
      <DonateForm
        amount={amount}
        onAmountChange={setAmount}
        currency={currency}
        onCurrencyChange={handleCurrencyChange}
      />
    </main>
  );
}
