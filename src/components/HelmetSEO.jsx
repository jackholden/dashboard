import { Helmet } from "react-helmet-async";

const siteTitle = "Simple Invoice";

export default function HelmetSEO({ title }) {
  return (
    <Helmet
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
      title={title}
      htmlAttributes={{ lang: "en" }}
    />
  );
}
