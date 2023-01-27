export interface MasterListItem {
  id: number;
  typeId: number;
  description: string;
}

export type MasterListItems = MasterListItem[];

export interface MasterListItemsState {
  items: MasterListItems;
}
