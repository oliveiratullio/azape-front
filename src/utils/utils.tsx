export function formatCPF(cpf: string) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  
export function formatCNPJ(cnpj: string) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
  
export  function formatCPForCNPJ(doc: string) {
    return doc.length === 11 ? formatCPF(doc) : formatCNPJ(doc);
  }
  
export  function formatCurrency(value: number) {
    return `R$ ${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }
  
  type StatusKey = 'paid' | 'sent' | 'pending' | 'canceled' | 'delivered' | 'succeeded' | 'Aprovada';

  const statusTranslations: Record<StatusKey, string> = {
    paid: "Pagamento Aprovado",
    sent: "Enviado",
    pending: "Pendente",
    canceled: "Cancelado",
    delivered: "Entregue",
    succeeded: "Aprovado",
    Aprovada: "Aprovado"
  };
    
  export function translateStatus(status: StatusKey) {
    return statusTranslations[status] || status;
  }
  
  
  export function translatePaymentMethod(method: string | number) {
    const methodTranslations: { [key: string]: string } = {
      credit_installments: "Crédito a prazo",
      credit: "Crédito à vista",
      pix: "Pix",
      PIX: "Pix",
      boleto: "Boleto"
    };
  
    const key = typeof method === 'number' ? method.toString() : method;
    return methodTranslations[key] || "Método desconhecido";
  }
  
export function formatName(fullName: string) {
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
    }
    return fullName;
  }
  