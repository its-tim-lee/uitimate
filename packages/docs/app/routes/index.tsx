import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/docs/get-started/introduction", { replace: true });
  }, [navigate]);

  return null;
}