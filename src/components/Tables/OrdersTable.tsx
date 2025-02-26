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
    <>
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
      <Pagination>
        <ItemDiv>
        <NumberDiv color="#FE7C6E" >
          {"<<"}
        </NumberDiv>
        <NumberDiv color="#FE7C6E" >
          {"<"}
        </NumberDiv>
        <NumberDiv><Circle><h1>1</h1></Circle></NumberDiv>
        <NumberDiv>2</NumberDiv>
        <NumberDiv>3</NumberDiv>
        <NumberDiv>4</NumberDiv>
        <NumberDiv>5</NumberDiv>
        <NumberDiv color="#FE7C6E" >
          {">"}
        </NumberDiv>
        <NumberDiv color="#FE7C6E" >
          {">>"}
        </NumberDiv>
        </ItemDiv>
        <PageDisplay>1 de 10 páginas</PageDisplay>
        <SelectDiv>
          <h2>Linhas por página</h2>
          <select>
            {[20, 10, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </SelectDiv>
      </Pagination>
    </>
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
const Pagination = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F5F5F5;
  border-top: 1px solid #e5e5e5;
  button{
    width: 20px;
    color: #FE7C6E;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #FE7C6E;
  h1{
    color: #FFFFFF;
  }
`;

const PageDisplay = styled.div`
  width: 200px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #97A1A8;
`;

const NumberDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "#97A1A8"};
`;

const ItemDiv = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SelectDiv = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #97A1A8;
  select{
    width: 90px;
    height: 32px;
    padding: 0 15px 0 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #E6E6E6;
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
  }
  h2{
    font-size: 14px;
    margin-right: 10px;
  }
`