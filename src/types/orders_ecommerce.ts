export interface OrdersEcommerce {
  customerId: string;
  pendencies: PendencyEcommerce[];
}

export interface PendencyEcommerce {
  status: string;
  codeERP: string;
  pendencyId: string;
  clientId: string;
  clientName: string;
  createdDate: string;
  createdTime: string;
  labelButton: LabelButtonEcommerce;
  date: Date;
  time: string;
  subsidiaryId: string;
  codeEcommerce: string;
  updateDate: string;
  updateTime: string;
  index: number;
  type: string;
}

export interface LabelButtonEcommerce {
  collorButton: string;
  description: string;
  abbreviatedDescription: string;
}
