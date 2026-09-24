import type { Metadata } from "next";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = {
  title: "Wanio",
  description: "Complete your order for premium organic honey products.",
};

export default function CheckoutPage() {
  return <CheckoutForm />;
}
