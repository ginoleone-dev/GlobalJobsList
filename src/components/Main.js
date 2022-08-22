import React, { useState, useEffect } from "react";
import data from "../data";
import Buttons from "./Buttons";
import EmployeeMenu from "./EmployeeMenu";
import EmployerMenu from "./EmployerMenu";
import Footer from "./Footer";
import { rdb } from "../firebase-config";
import { onValue, ref } from "firebase/database";
import { Box, Container, Typography } from "@mui/material";

export default function Main() {
  const [employeeList, setEmployeeList] = useState([]);
  const [employerList, setEmployerList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [employerCat, setEmployerCat] = useState([]);
  const [buttonsEmployee, setButtonsEmployee] = useState([]);
  const [buttonsEmployer, setButtonsEmployer] = useState([]);
  const [menuItemEmployee, setMenuItemEmployee] = useState([]);
  const [menuItemEmployer, setMenuItemEmployer] = useState([]);
  // Read

  useEffect(() => {
    const fetchData = async () => {
      await onValue(ref(rdb), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          const list0 = data[0].employee;
          const list1 = data[1].employers;
          setEmployeeList(list0);
          setEmployerList(list1);
          setButtonsEmployee(list0.map((person) => [person.field]));
          setButtonsEmployee((items) => ["All", ...items]);
          setButtonsEmployer(list1.map((person) => [person.field]));
          setButtonsEmployer((items) => ["All", ...items]);
          setMenuItemEmployee(list0);
          setMenuItemEmployer(list1);

          setLoaded(true);
        } else {
        }
      });
    };
    fetchData();
  }, []);

  // List of Categories for Buttons

  // const allEmployeeCategories = [
  //   "All",
  //   ...new Set(employerList.map((item) => item.field)),
  // ];

  // const allEmployeeCategories = ["All", ...buttonsEmployee];

  // const allEmployerCategories = ["All", ...buttonsEmployer];

  // Filter employee list according to the button clicked
  const filterEmployee = (inputtedField) => {
    // Checking first if 'All' button was clicked
    if (inputtedField === "All") {
      setMenuItemEmployee(employeeList);
      return;
    }
    const filteredData = employeeList.filter(
      (dat) => dat.field == inputtedField
    );
    setMenuItemEmployee(filteredData);
  };

  const filterEmployer = (inputtedField) => {
    // Checking first if 'All' button was clicked
    if (inputtedField === "All") {
      setMenuItemEmployer(employerList);
      return;
    }
    const filteredData = employerList.filter(
      (dat) => dat.field == inputtedField
    );
    setMenuItemEmployer(filteredData);
  };

  return (
    <Box minHeight={700}>
      <div className="mainContainer">
        <Container
          className="textEmployee"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            className="titleHire"
            variant="h4"
            marginTop="20px"
            fontSize={{ xs: "1.8rem", sm: "1.9rem", md: "2rem" }}
          >
            Looking to hire someone?
          </Typography>
          <Typography
            variant="h4"
            marginTop="10px"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
          >
            Find your next.{" "}
          </Typography>
        </Container>
        <Container
          className="textEmployer"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            className="titleHire"
            variant="h4"
            marginTop="20px"
            fontSize={{ xs: "1.8rem", sm: "1.9rem", md: "2rem" }}
          >
            Looking to hire someone?
          </Typography>
          <Typography
            variant="h4"
            marginTop="10px"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
          >
            Find your next.{" "}
          </Typography>
        </Container>
        <div className="employee">
          {/* <div className="filterBtnEmployee"> */}

          {loaded ? (
            <Buttons
              button={buttonsEmployee}
              filter={filterEmployee}
              loaded={loaded}
            />
          ) : (
            <Typography textAlign={"center"}>Loading</Typography>
          )}

          <div className="listingEmployee">
            {loaded && (
              <EmployeeMenu menuItem={menuItemEmployee} loaded={loaded} />
            )}
          </div>
        </div>
        <div className="employer">
          {loaded ? (
            <Buttons
              button={buttonsEmployer}
              filter={filterEmployer}
              loaded={loaded}
            />
          ) : (
            <Typography textAlign={"center"}>Loading</Typography>
          )}

          <div className="listingEmployer">
            {loaded && (
              <EmployerMenu menuItem={menuItemEmployer} loaded={loaded} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Box>
  );
}
