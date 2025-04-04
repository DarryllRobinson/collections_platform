import React from "react";
import { useLoaderData } from "react-router";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery, // Correct import for useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import global theme
import { customerService } from "./customer.service";

export async function customersLoader() {
  const customers = await customerService.getSnapshot();
  if (!customers) {
    throw new Response("Not Found", { status: 404 });
  }
  return { customers };
}

export default function Customers() {
  const { customers } = useLoaderData();
  // console.log("Customers:", customers);
  const theme = useTheme(); // Access global theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens

  return (
    <Box
      sx={{
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightBold,
          textAlign: isSmallScreen ? "center" : "left", // Center text on small screens
        }}
      >
        Customer Snapshot
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
          overflowX: "auto", // Ensure responsiveness for small screens
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(customers[0]).map((field) => (
                <TableCell
                  key={field}
                  sx={{
                    fontWeight: theme.typography.fontWeightMedium,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[800]
                        : theme.palette.grey[200], // Adjust header background for dark mode
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary, // Adjust text color for readability
                  }}
                >
                  {field}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor:
                    customer.amountDue > 0
                      ? theme.palette.error.light
                      : "inherit", // Shade row if Amount Due > 0
                }}
              >
                {Object.values(customer).map((value, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
