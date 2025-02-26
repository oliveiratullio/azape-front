import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { PiMathOperations, PiScrollLight } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";
import React, { useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatCPForCNPJ, formatCurrency, formatName, translatePaymentMethod, translateStatus } from "../../utils/utils";

function DashboardPage() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState({
    orders: [],
    orders_count: 0,
    orders_total: 0,
    sales_count: 0,
    sales_total: 0,
    average_ticket: 0,
    });
  const [data, setData] = useState([]);
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
        Cell: ({ value }: { value: number }) => `R$ ${value}`,
      },
    ],
    []
  );

  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      fetchOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, navigate]);

  if (!auth) {
    return <div>Redirecionando para login...</div>;
  }
  const {token} = auth;
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/proof/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const formattedData = response.data.orders.map((order: { _id: string; order_seller_id: string; createdAt: string | Date; customer: { name: string; doc: string; }; status: string; payment: { status: string; method: string | number; amount: number; }; }) => ({
          id: `#${order._id}`,
          storeId: `#${order.order_seller_id}`,
          creationDate: new Date(order.createdAt).toLocaleDateString(),
          customerName: formatName(order.customer.name),
          customerCpfCnpj: formatCPForCNPJ(order.customer.doc),
          orderStatus: translateStatus(order.status),
          paymentStatus: translateStatus(order.payment.status),
          paymentMethod: translatePaymentMethod(order.payment.method),
          total: formatCurrency(order.payment.amount)
        }));
        
        setData(formattedData);
      setOrders(response.data);
      console.log(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
    }
  }
  const { orders_count, orders_total, sales_count, sales_total, average_ticket } = orders;
  
  return (
    <>
      <Container>
        <NavBar />
        <SideBar />
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
                <h2>{loading ? "Carregando..." : orders_count} Pedidos</h2>
                <h1>R$ {loading ? "Carregando..." : orders_total}</h1>
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
                <h2>{loading ? "Carregando..." : sales_count} Vendas</h2>
                <h1>R$ {loading ? "Carregando..." : sales_total}</h1>
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
                <h1>R$ {loading ? "Carregando..." : average_ticket}</h1>
              </ResumeItem>
            </ResumeBox>
            <TableBox>
              <OrdersTable columns={columns} data={data} />
            </TableBox>
          </DataBox>
          
        </Content>
        <Footer />
      </Container>
    </>
  );
}
export default DashboardPage;


