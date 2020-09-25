import jwt from "jsonwebtoken";
export const isAuthenticated = (token) => {
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = jwt.decode(token);
  return date < data.exp;
};
