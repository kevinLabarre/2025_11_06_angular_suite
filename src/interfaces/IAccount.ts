export interface IAccount {
  id?: string;
  userId?: number;
  accountNumber: string;
  accountType: 'EPARGNE' | 'COURANT'; // Pour améliorer, créer une enum
  solde: number;
  lastTransactionDate: Date
}
