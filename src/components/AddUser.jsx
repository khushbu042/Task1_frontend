
import { FormControl,FormGroup,InputLabel,Input, Typography, Button} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import AllUser from "./AllUser";
const initialvalues={
  name:"",
  email:"",
  phone:"",
  emptitle:""
};

const AddUser = () => {
    const[user,setuser]=useState(initialvalues)
    const navigate = useNavigate();
     
    const onValueChange = (e) => {
          // console.log(e.target.name,e.target.value)
          setuser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails = async() => {
        // alert("Data Submitted")
        await addUser(user);
        navigate('/all');
    }

    /* css*/
    const formgroup={
      width:"40%",
      margin: " 8% auto 0 auto",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
    }
    const formcontrol={
      margin: "12px 15px 0px 15px"
    }
    
    
    return (
      <>
        <FormGroup style={formgroup}>
          <Typography variant="h4" style={{textAlign:"center"}} >Add Employee Detail</Typography>
          <FormControl style={formcontrol}>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="name"/>
          </FormControl> 
          <FormControl style={formcontrol}>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="email"/>
          </FormControl>
          <FormControl style={formcontrol}>
              <InputLabel>Phone</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="phone"/>
          </FormControl>
          <FormControl style={formcontrol}>
              <InputLabel>Emp Title</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="emptitle"/>
          </FormControl>
          <div  style={{display: 'flex', justifyContent: 'center ', alignItems: 'center',margin:"5%"}} >
              <Button variant="contained" style={{  backgroundColor: '#9370DB', 
      color: 'white'}}onClick={addUserDetails}>Add Employee</Button>
          </div>
        </FormGroup>
      </>
    );
  
  }
  
  export default AddUser
  