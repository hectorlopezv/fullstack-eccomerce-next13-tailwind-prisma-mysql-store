"use client";

import useIsMounted from "@/hooks/use-is-mounted";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <p className="font-semibold">{formatter.format(Number(value))}</p>;
};

export default Currency;
