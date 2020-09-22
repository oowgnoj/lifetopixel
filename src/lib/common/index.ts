export const DOMAIN_API =
  process.env.REACT_APP_NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
