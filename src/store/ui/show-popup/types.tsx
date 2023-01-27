export interface UIShowPopupPayload {
  id: number;
  type: string;
}

export interface UIShowPopupState extends UIShowPopupPayload {
  isOpen: boolean;
}
