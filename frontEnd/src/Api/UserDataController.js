// GetUserData.js
import React, { useState, useEffect } from "react";
import { deleteAccount, getAllUserFromServer } from "./ApiService";
import { Button, Table } from "reactstrap";
import { toast } from "react-toastify";

export function GetUserData({ handleEdit, reload, reloadData }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    allUser();
  }, [reload]);

  const allUser = async () => {
    try {
      const res = await getAllUserFromServer();
      setUser(res.data);
    } catch (error) {
      console.log("Something went wrong while fetching users.");
    }
  };

  const DeleteUserAccount = async (id) => {
    try {
      await deleteAccount(id);
      toast.success("Account Removed Successfully!");
      reloadData(); // ✅ Trigger parent refresh
    } catch (error) {
      console.error("Error deleting user: ", error);
      toast.error("Error deleting account!");
    }
  };

  return (
    <>
      <h1><b><center>All USER DATA</center></b></h1>
      <Table bordered>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email ID</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr key={users.id}>
              <td>{users.userName}</td>
              <td>{users.emailId}</td>
              <td>{users.userType.join(", ")}</td>
              <td>
                <Button color="primary" onClick={() => handleEdit(users)}>
                  Update
                </Button>{" "}
                <Button color="danger" onClick={() => DeleteUserAccount(users.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
