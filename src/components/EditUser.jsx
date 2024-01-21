
import { FormControl,FormGroup,InputLabel,Input, Typography, Button} from "@mui/material";
import { useEffect, useState } from "react";
import { getUser,editUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
 
const initialvalues={
  name:"",
  email:"",
  age:"",
  occupation:""
};

const EditUser = () => {
    const[user,setuser]=useState(initialvalues)
    const navigate = useNavigate();
    const {id} =useParams();

    useEffect(() =>{
        getUserData();
    },[])
     
    const getUserData = async () =>{
        let response=await getUser(id);
        console.log(response);
        setuser(response.data);
    }
    const onValueChange = (e) => {
          // console.log(e.target.name,e.target.value)
          setuser({...user,[e.target.name]:e.target.value})
          // console.log(user)
    }

    const addUserDetails = async() => {
        // alert("Data Submitted")
        await editUser(user,id);
        navigate('/all');
    }

    /* css*/
    const formgroup={
      width:"50%",
      margin: " 5% auto 0 auto"
    };
    const formcontrol={
      margin:"5% 0px 0px 0px"
    }
    
    

    return (
      <>
        <FormGroup style={formgroup}>
          <Typography variant="h4">Edit Employee Detail</Typography>
          <FormControl style={formcontrol}>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name}/>
          </FormControl> 
          <FormControl style={formcontrol}>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="emptitle" value={user.email}/>
          </FormControl>
          <FormControl style={formcontrol}>
              <InputLabel>Age</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="phone" value={user.phone}/>
          </FormControl>
          <FormControl style={formcontrol}>
              <InputLabel>Occupation</InputLabel>
              <Input onChange={(e)=> onValueChange(e)} name="emptitle" value={user.emptitle}/>
          </FormControl>
          <FormControl style={formcontrol}>
              <Button variant="contained" onClick={addUserDetails}>Edit Employee</Button>
          </FormControl>
        </FormGroup>
      </>
    );
  
  }
  
  export default EditUser
  