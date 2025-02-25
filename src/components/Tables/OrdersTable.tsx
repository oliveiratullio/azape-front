import styled from "styled-components";
import { useTable } from "react-table";
import {
  Order,
  OrdersTableProps,
} from "../../interfaces/OrdersTableInterfaces";

function OrdersTable({ columns, data }: OrdersTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Order>({
      columns,
      data,
    });

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}

export default OrdersTable;

const Styles = styled.div`
  overflow: hidden;

  table {
    border-spacing: 0;
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: left;
      border-right: none;
      border-bottom: 1px solid #f5f5f5;
      vertical-align: center;

      :last-child {
        border-right: none;
      }
    }

    th {
      background-color: #fe877a;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      height: 58px;
      border-top: none;
    }

    th:nth-child(odd) {
      background-color: #fe7c6e;
    }

    tbody tr {
      height: 56px;
    }

    tbody tr:nth-child(odd) td {
      background-color: #fcfcfc;
    }

    tbody tr:nth-child(even) td {
      background-color: #ffffff;
    }

    td {
      color: #59666f;
      font-size: 12px;
      font-weight: 400;
    }

    thead tr {
      border-radius: 8px;
    }
  }
`;
