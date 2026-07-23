import type {} from "@stripe/stripe-js";

declare module "@stripe/stripe-js" {
  interface RedirectToCheckoutOptions {
    lineItems?: Array<{
      price?: string;
      price_data?: {
        currency: string;
        product_data: {
          name: string;
          description?: string;
          images?: string[];
        };
        unit_amount: number;
        unit_amount_decimal?: string;
        recurring?: {
          interval: "day" | "month" | "week" | "year";
          interval_count: number;
        };
        tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      };
      quantity: number;
      adjustable_quantity?: {
        enabled: boolean;
        minimum?: number;
        maximum?: number;
      };
      dynamic_tax_rates?: string[];
    }>;
    mode: "payment" | "subscription" | "setup";
    successUrl: string;
    cancelUrl: string;
    clientReferenceId?: string;
    customerEmail?: string;
    billingAddressCollection?: "auto" | "required";
    shippingAddressCollection?: {
      allowedCountries: string[];
    };
    locale?: string;
    submitType?: "auto" | "pay" | "book" | "donate";
  }

  interface Stripe {
    redirectToCheckout(
      options: RedirectToCheckoutOptions,
    ): Promise<{ error?: { message?: string } }>;
  }
}
