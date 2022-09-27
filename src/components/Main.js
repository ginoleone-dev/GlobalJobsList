import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import EmployeeMenu from "./EmployeeMenu";
import EmployerMenu from "./EmployerMenu";

import { rdb } from "../firebase-config";
import { onValue, ref } from "firebase/database";
import { Box, Container, Typography } from "@mui/material";

import Header from "./Header";
import PostCallToAction from "./PostCallToAction";
import Sidebar from "./Sidebar";

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
          const list0 = Object.values(data[0].employee);
          const list1 = Object.values(data[1].employers);
          const employeeButtonList = [
            ...new Set(list0.map((item) => item.field)),
          ];
          const employerButtonList = [
            ...new Set(list1.map((item) => item.field)),
          ];

          setEmployeeList(list0);
          setEmployerList(list1);
          setButtonsEmployee(employeeButtonList);
          setButtonsEmployee((items) => ["All", ...items]);
          setButtonsEmployer(employerButtonList);
          setButtonsEmployer((items) => ["All", ...items]);
          setMenuItemEmployee(list0);
          setMenuItemEmployer(list1);
          setLoaded(true);
        } else {
          console.log("data not in yet");
        }
      });
    };
    fetchData();
  }, []);

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
    <Box>
      <Header />
      <Box minHeight={700} sx={{ display: "flex", flexDirection: "column" }}>
        <Container
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          {/* SideBar */}

          <Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                className="titleHire"
                variant="h2"
                fontWeight={500}
                marginTop="20px"
                textAlign={"center"}
                fontSize={{ xs: "1.8rem", sm: "1.9rem", md: "2rem" }}
              >
                Looking to hire someone?
              </Typography>
              <Typography
                variant="h4"
                marginTop="10px"
                fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
              >
                A quality hire reduces fires!
              </Typography>
            </Container>
            <Container className="employee">
              {loaded ? (
                <Buttons
                  button={buttonsEmployee}
                  filter={filterEmployee}
                  loaded={loaded}
                />
              ) : (
                <Typography textAlign={"center"}>Loading</Typography>
              )}

              <Container className="listingEmployee">
                {loaded && (
                  <EmployeeMenu menuItem={menuItemEmployee} loaded={loaded} />
                )}
              </Container>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                className="titleHire"
                variant="h2"
                fontWeight={500}
                marginTop="20px"
                fontSize={{ xs: "1.8rem", sm: "1.9rem", md: "2rem" }}
              >
                Looking for a job?
              </Typography>
              <Typography
                variant="h4"
                marginTop="10px"
                fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
              >
                Find your next big opportunity!
              </Typography>
            </Container>
            <Container className="employer">
              {loaded ? (
                <Buttons
                  button={buttonsEmployer}
                  filter={filterEmployer}
                  loaded={loaded}
                />
              ) : (
                <Typography textAlign={"center"}>Loading</Typography>
              )}

              <Container className="listingEmployee">
                {loaded && (
                  <EmployerMenu menuItem={menuItemEmployer} loaded={loaded} />
                )}
              </Container>
            </Container>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}
