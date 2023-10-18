import "./style.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationSide from "./components/Navigation/NavigationSide";
import NavigationTop from "./components/Navigation/NavigationTop";
import NavigationMobile from "./components/Navigation/NavigationMobile";

import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices/Invoices";
import InvoicesNew from "./pages/Invoices/InvoicesNew";
import InvoicesDetailed from "./pages/Invoices/InvoicesDetailed";
import Customers from "./pages/Customers/Customers";
import CustomersNew from "./pages/Customers/CustomersNew";
import CustomersDetailed from "./pages/Customers/CustomersDetailed";
import CustomersPaymentsTab from "./components/Customers/Tabs/CustomersPaymentsTab";
import CustomersDetailsTab from "./components/Customers/Tabs/CustomersDetailsTab";
import CustomersInvoicesTab from "./components/Customers/Tabs/CustomersInvoicesTab";
import CustomersEdit from "./pages/Customers/CustomersEdit";
import Payments from "./pages/Payments/Payments";
import PaymentsDetailed from "./pages/Payments/PaymentsDetailed";
import Reports from "./pages/Reports/Reports";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [mopened, setMopened] = useState(false);
  return (
    <>
      <div className="app-layout">
        <NavigationMobile opened={mopened} setOpened={setMopened} />
        <aside className={`app-sidenav ${expanded && "expanded"}`}>
          <NavigationSide expanded={expanded} setExpanded={setExpanded} />
        </aside>
        <nav className="app-header">
          <NavigationTop setOpened={setMopened} />
        </nav>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/new" element={<InvoicesNew />} />
            <Route path="/invoices/:id" element={<InvoicesDetailed />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/new" element={<CustomersNew />} />
            <Route path="/customers/edit/:id" element={<CustomersEdit />} />
            <Route path="/customers/:id" element={<CustomersDetailed />}>
              <Route path="" element={<CustomersDetailsTab />} />
              <Route path="*" element={<CustomersDetailsTab />} />
              <Route path="invoices" element={<CustomersInvoicesTab />} />
              <Route path="payments" element={<CustomersPaymentsTab />} />
            </Route>
            <Route path="/payments" element={<Payments />} />
            <Route path="/payments/:id" element={<PaymentsDetailed />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
