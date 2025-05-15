
import { FormControl,FormGroup,InputLabel,Input, Typography, Button} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

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
      if (!user.name || !user.email || !user.phone || !user.emptitle) {
        alert("Please fill in all fields");
        return;
      }
      try {
        await addUser(user);
        navigate("/all");
      } catch (error) {
        console.error("Error adding user:", error.message);
        alert("Failed to add user. Please try again.");
      }
    }
    // css
    const formcontrol={
      margin: "15px 15px 0px 15px"
    }
      
    
    return (
      <>
        <FormGroup sx={{ width:"40%", margin: "40px auto", padding:"10px", boxShadow: 3 }}>
          <Typography variant="h4" color="#2575fc" textAlign="center" fontWeight="bold" gutterBottom >Add Employee Detail</Typography>
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
              <Button variant="contained" style={{  backgroundColor: '#2575fc', 
      color: 'white'}}onClick={addUserDetails}>Add Employee</Button>
          </div>
        </FormGroup>
      </>
    );
  
  }
  
  export default AddUser
  


