import axios from "axios";
import { useEffect } from "react";

const useToken = async (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user.email;
    const currentUser = { email: email };

    if (email) {
      fetch(
        `https://warehouse-management-server-site-production-009e.up.railway.app/login`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
};

export default useToken;
