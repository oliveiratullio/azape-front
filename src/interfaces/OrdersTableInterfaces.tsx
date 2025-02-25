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
  
export type Column = {
    Header: string;
    accessor: keyof Order; 
}

export interface OrdersTableProps {
    columns: Column[];
    data: Order[];
  }
  