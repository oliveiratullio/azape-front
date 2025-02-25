import { Column as ReactTableColumn, CellProps } from "react-table";

export interface Order {
  id: string;
  storeId: string;
  creationDate: string;
  customerName: string;
  customerCpfCnpj: string;
  orderStatus: string;
  paymentStatus: string;
  paymentMethod: string;
  total: number;
}

export type Column = ReactTableColumn<Order> & {
  accessor: keyof Order;
  Cell?: (props: CellProps<Order>) => React.ReactNode;
};

export interface OrdersTableProps {
  columns: Column[];
  data: Order[];
}
