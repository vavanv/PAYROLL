export interface CompanyState {
  id?: number;
  legalName: string;
  street: string;
  city: string;
  provinceId?: number;
  postalCode: string;
  businessTypeId?: number;
  establishedDate: Date;
  description: string;
}
