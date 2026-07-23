declare module "@paystack/inline-js" {
  interface PaystackTransaction {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    ref?: string;
    metadata?: Record<string, unknown>;
    onSuccess: (transaction: PaystackResponse) => void;
    onClose: () => void;
  }

  interface PaystackResponse {
    reference: string;
    status: string;
    message: string;
    transaction: string;
  }

  class PaystackPop {
    newTransaction(opts: PaystackTransaction): void;
  }

  export default PaystackPop;
}
