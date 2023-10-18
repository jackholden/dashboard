export const API_URL = "https://jsonplaceholder.typicode.com/";

export function getCustomers() {
  return `${API_URL}/customer`;
}

export function getCustomersDetailed(id) {
  return `${API_URL}/customer/${id}`;
}

export function postCustomersNew() {
  return [
    {
      url: `${API_URL}/customer`,
      method: "POST",
    },
  ];
}

export function putCustomersEdit(id) {
  return [
    {
      url: `${API_URL}/customer/${id}`,
      method: "PUT",
    },
  ];
}

export function deleteSpecificCustomer(id) {
  return [
    {
      url: `${API_URL}/customer/${id}`,
      method: "DELETE",
    },
  ];
}

export function getInvoices() {
  return `${API_URL}/invoice`;
}

export function getInvoicesDetailed(id) {
  return `${API_URL}/invoice/${id}`;
}

export function getInvoicesCustomerDetailed(id) {
  return `${API_URL}/invoice/customer/${id}`;
}

export function getPayments() {
  return `${API_URL}/payments`;
}

export function getPaymentsDetailed(id) {
  return `${API_URL}/payments/${id}`;
}

export function getPaymentsCustomerDetailed(id) {
  return `${API_URL}/payments/customer/${id}`;
}

export function getCountries() {
  //return `${API_URL}/geo/countries`; TODO
}

export function getCounties() {
  //return `${API_URL}/geo/counties`; TODO
}

export function getCities() {
  //return `${API_URL}/geo/cities`; TODO
}
