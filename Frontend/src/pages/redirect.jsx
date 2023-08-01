import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const [uurl, setUurl] = useState(null);
  const api = 'http://localhost:8080/api/v1/urls' //api for gettin data from api 
  const navigate = useNavigate();
  const { id } = useParams();
  const geturl = async () => {
    try {
      const resp = await axios.get(api + "/" + id);
      setUurl(resp.data.url);
    } catch (error) {
      console.error("Error fetching URL:", error);
    }
  };

  useEffect(() => {
    geturl();
  }, []);

  useEffect(() => {
    if (uurl) {
      window.location.href = uurl;
    }
  }, [uurl]);

  return null; // This component doesn't render anything, so we return null
};

export default Redirect;
