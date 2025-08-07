import React, { useState, useEffect } from "react";
import { createNewUSerAccount, updateUserDetails } from "./ApiService";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";

function NewOrUpdatedUser({ editUser, setEditUser, reloadData }) {
  // Use a single formData for both create and update
  const [formData, setFormData] = useState({
    userName: "",
    emailId: "",
    userType: [],
    password: ""
  });

  // Load user data into form when editUser changes
  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  // Submit handler for create or update
  const handleFormSubmitAction = async (e) => {
    e.preventDefault();
    try {
      if (editUser && editUser.id) {
        await updateUserDetails(editUser.id, formData);
        setEditUser(null); // Clear edit state
        toast.success("User Updated Successfully!");
      } else {
        await createNewUSerAccount(formData);
        toast.success("User Created Successfully!");
      }

      // Reset form
      setFormData({
        userName: "",
        emailId: "",
        userType: [],
        password: ""
      });

      if (reloadData) reloadData(); // call parent function to refresh user list
    } catch (error) {
      console.log("Error in submitting form: ", error);
      toast.error("Something went wrong!");
    }
  };

  // Checkbox logic for selecting userType
  const handleUserTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, userType: [...formData.userType, value] });
    } else {
      setFormData({
        ...formData,
        userType: formData.userType.filter((type) => type !== value)
      });
    }
  };

  return (
    <div
      className="container"
      style={{
        width: 500,
        padding: 20,
        border: "2px solid gray",
        borderRadius: 20,
        fontFamily: "Arial, sans-serif",
        fontSize: 17,
        backgroundColor: "rgba(123,44,191,0.6)"
      }}
    >
      <h2 style={{ backgroundColor: "rgba(255, 247, 0,1)" }}>
        <center>{editUser ? "Update" : "Create New"} Account</center>
      </h2>

      <Form onSubmit={handleFormSubmitAction}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            id="username"
            name="name"
            placeholder="Enter Your Name"
            type="text"
            value={formData.userName}
            required
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label for="emailid">Email ID</Label>
          <Input
            id="emailid"
            name="email"
            placeholder="abc@gmail.com"
            type="email"
            value={formData.emailId}
            required
            onChange={(e) =>
              setFormData({ ...formData, emailId: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label>Select UserType</Label>
          <br />
          <FormGroup check inline>
            <Input
              type="checkbox"
              value="User"
              checked={formData.userType.includes("User")}
              onChange={handleUserTypeChange}
            />
            {" "}User
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              value="Instructor"
              checked={formData.userType.includes("Instructor")}
              onChange={handleUserTypeChange}
            />
            {" "}Instructor
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup style={{ textAlign: "center" }}>
          <Button
            type="submit"
            style={{
              borderRadius: 50,
              borderColor: "rgba(255, 247, 0,1)",
              width: 300,
              backgroundColor: "rgb(28, 19, 74)"
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
export default NewOrUpdatedUser;