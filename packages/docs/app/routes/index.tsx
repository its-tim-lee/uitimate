import { useEffect } from "react";
import { useNavigate } from "react-router";

export const meta = () => ([{
  title: "Home of Uitimate",
}]);

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/docs/get-started/introduction", { replace: true });
  }, [navigate]);

  return null;
}