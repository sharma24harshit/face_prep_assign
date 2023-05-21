import { Avatar, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      nav("/login");
    }

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [page, isAuth]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
      );
      let res = response.data;
      setData((prev) => [...prev, ...res.results]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + Number(document.documentElement.scrollTop) ==
        Number(document.documentElement.scrollHeight)
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Heading className="Heading">Users List</Heading>
      <div className="container">
        {data &&
          data.map((el, i) => (
            <div key={i} className="list_div">
              <div>
                <Avatar
                  size="lg"
                  name={el.name.first}
                  src={el.picture.thumbnail}
                />
              </div>

              <div>
                <Text as="b" className="names">
                  {el.name.title}
                  {"  "}
                  {el.name.first}
                  {"  "}
                  {el.name.last}
                </Text>
              </div>
            </div>
          ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Home;
