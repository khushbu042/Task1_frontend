import { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetail();
  }, []);

  const getUsersDetail = async () => {
    const mockData = [
    { id: 1, name: "Ravi", email: "ravi@gmail.com", phone: "9999999999", emptitle: "Engineer" },
    { id: 2, name: "Neha", email: "neha@gmail.com", phone: "8888888888", emptitle: "HR" },
  ];
    setUsers(mockData);
    // try {
    //   let response = await getUsers();
    //   setUsers(response.data);
    // } catch (error) {
    //   console.error("Failed to fetch users", error);
    //   setUsers([]);
    // }
  };

  const deleteUserData = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      getUsersDetail();
    }
  };

  return (
    <Box sx={{ maxWidth: "95%", margin: "40px auto" }}>
      <Typography variant="h4" gutterBottom textAlign="center" color="#2575fc" fontWeight="bold">
        Employee Directory
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table stickyHeader aria-label="user table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#9370DB" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Emp Title</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 5 }}>
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{ "&:hover": { backgroundColor: "#f3e5f5" } }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.emptitle}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/edit/${user.id}`}
                      sx={{ mr: 1 }}
                      color="primary"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllUser;
