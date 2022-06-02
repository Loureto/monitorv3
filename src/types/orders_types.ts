export interface OrdersZeroCheckin {
  customerId: string;
  pendencies: Pendency[];
}

export interface Pendency {
  status: string;
  codeERP: string;
  pendencyId: string;
  clientId: string;
  clientName: string;
  createdDate: Date;
  createdTime: string;
  labelButton: LabelButton;
  date: Date;
  time: string;
  subsidiaryId: string;
  codeEcommerce: string;
  updateDate: string;
  updateTime: string;
  index: number;
}

export interface LabelButton {
  collorButton: string;
  description: string;
  abbreviatedDescription: string;
}
