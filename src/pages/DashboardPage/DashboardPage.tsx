import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { PiMathOperations, PiScrollLight } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";
import React from "react";
import OrdersTable from "../../components/Tables/OrdersTable";
import { Column } from "../../interfaces/OrdersTableInterfaces";
import {
  Container,
  Content,
  DataBox,
  IconCircle,
  ResumeBox,
  ResumeItem,
  TableBox,
  TextBox,
} from "./Style";
import Footer from "../../components/Footer/Footer";

function DashboardPage() {
  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: "ID do Pedido",
        accessor: "id",
      },
      {
        Header: "ID na Loja",
        accessor: "storeId",
      },
      {
        Header: "Criação",
        accessor: "creationDate",
      },
      {
        Header: "Nome do Cliente",
        accessor: "customerName",
      },
      {
        Header: "CPF/CNPJ do Cliente",
        accessor: "customerCpfCnpj",
      },
      {
        Header: "Status do Pedido",
        accessor: "orderStatus",
      },
      {
        Header: "Status do Pagamento",
        accessor: "paymentStatus",
      },
      {
        Header: "Método de Pagamento",
        accessor: "paymentMethod",
      },
      {
        Header: "Total",
        accessor: "total",
        Cell: ({ value }: { value: number }) => `R$ ${value.toFixed(2)}`,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "123",
        storeId: "001",
        creationDate: "2022-01-01",
        customerName: "John Doe",
        customerCpfCnpj: "123.456.789-10",
        orderStatus: "Enviado",
        paymentStatus: "Aprovado",
        paymentMethod: "Crédito",
        total: 100.0,
      },
    ],
    []
  );
  return (
    <>
      <NavBar />
      <SideBar />
      <Container>
        <Content>
          <TextBox>
            <h1>Resumo dos Pedidos</h1>
          </TextBox>
          <DataBox>
            <ResumeBox>
              <ResumeItem>
                <IconCircle color="#F4C8E1">
                  <PiScrollLight
                    style={{
                      width: "19.5px",
                      height: "19.5px",
                      color: "#E54594",
                    }}
                  />
                </IconCircle>
                <h2>200 Pedidos</h2>
                <h1>R$ 50.480,95</h1>
              </ResumeItem>
              <ResumeItem>
                <IconCircle color="#B6EEDD">
                  <LuCircleDollarSign
                    style={{
                      width: "19.5px",
                      height: "19.5px",
                      color: "#07C693",
                    }}
                  />
                </IconCircle>
                <h2>156 Vendas</h2>
                <h1>R$ 35.480,95</h1>
              </ResumeItem>
              <ResumeItem>
                <IconCircle color="#C3E7F3">
                  <PiMathOperations
                    style={{
                      width: "19.5px",
                      height: "19.5px",
                      color: "#3CB0D9",
                    }}
                  />
                </IconCircle>
                <h2>Ticket médio</h2>
                <h1>R$ 480,95</h1>
              </ResumeItem>
            </ResumeBox>
            <TableBox>
              <OrdersTable columns={columns} data={data} />
            </TableBox>
          </DataBox>
          <Footer />
        </Content>
        
      </Container>
    </>
  );
}
export default DashboardPage;


