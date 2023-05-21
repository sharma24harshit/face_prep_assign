import { Box, Button } from "@chakra-ui/react"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider";

const Navbar = () => {
  const { isAuth ,setIsAuth} = useContext(AuthContext);
  
  return (
    <div>
        <Box className="navbar">
            <Link to="/" ><Box><Button>Home</Button></Box></Link>
            <Box>{isAuth?<Button onClick={()=>setIsAuth(false)} >Logout</Button>:<Link to="/login" ><Button>Login</Button></Link>}</Box>
            
        </Box>
    </div>
  )
}

export default Navbar