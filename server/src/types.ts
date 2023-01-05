export interface SaleType {
  id: string;
  number: string;
  fkPaymentMethod: number;
  fkAccount: number;
  fkCustomerId: string;
  fkSalespersonId: number;
}

export interface RepairType {
  id: string;
  number: string;
  fkPaymentMethod: number;
  fkBicycleId: string;
  fkCustomerId: string;
  status: string;
  fkTakenBy: string;
  fkTechnicianId: string;
  dateStarted: Date;
  dateFinished: Date;
  dateReturned: Date;
  fkSpareBicycleId: string;
  comment: string;
}
