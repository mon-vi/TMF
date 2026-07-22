import { useState, useCallback } from "react";
import DonateHero from "@/sections/donate/DonateHero";
import DonateForm from "@/sections/donate/DonateForm";

type Currency = "USD" | "NGN";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<Currency>("USD");

  const handleSelectAmount = useCallback((value: number) => {
    setAmount(value.toLocaleString());
  }, []);

  return (
    <main>
      <DonateHero
        currency={currency}
        onSelectAmount={handleSelectAmount}
      />
      <DonateForm
        amount={amount}
        onAmountChange={setAmount}
        currency={currency}
        onCurrencyChange={setCurrency}
      />
    </main>
  );
}
