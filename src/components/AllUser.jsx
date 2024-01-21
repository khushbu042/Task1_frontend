import { useEffect, useState } from "react";
// import MUI component 
import { Button, Table, TableBody, TableCell, TableHead, TableRow, linkClasses} from "@mui/material";
import { getUsers,deleteUser } from "../service/api";
import { Link } from "react-router-dom";



const AllUser =()=>{

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    getUsersDetail();
  },[])

  const getUsersDetail = async() => {
        let response =await getUsers();
        // console.log(response);
        // console.log(response.data);
        setUsers(response.data);     
  }

  const deleteUserData =async (id) => {
      await deleteUser(id);
      getUsersDetail();
  }

  /* css*/
  const table ={
    width:"80%",
    margin: "50px auto 0 auto",
    // border:"2px solid black"
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
  }
  const tablehead={
    background:"#9370DB",
    color:"white"
  }
  const tablerow={
    color:"#fff",
    font:"20px"
  }
  
  return (
    <>
        <Table style={table} >
          <TableHead style={tablehead}>
                <TableRow >
                  <TableCell style={tablerow} >Id</TableCell>
                  <TableCell style={tablerow}>Name</TableCell>
                  <TableCell style={tablerow}>Email</TableCell>
                  <TableCell style={tablerow}>Phone</TableCell>
                  <TableCell style={tablerow}>Emp Title</TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map(user => (
                    <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.emptitle}</TableCell>
                    <TableCell>
                        <Button variant="contained" style={{marginRight:"10px"}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button variant="contained"  style={{  backgroundColor: '#EE4B2B', 
      color: 'white'}} onClick={()=> deleteUserData(user.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </>
  );

}

export default AllUser

