import React from "react";
import { useLoaderData, useNavigate } from "react-router"; // Use react-router
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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate(); // Use navigate for programmatic navigation

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
          textAlign: isSmallScreen ? "center" : "left",
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
          overflowX: "auto",
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
                        : theme.palette.grey[200],
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.text.primary
                        : theme.palette.text.secondary,
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
                onClick={() => navigate(`/accounts/${customer.customerRefNo}`)} // Navigate on row click
                sx={{
                  cursor: "pointer", // Indicate clickable row
                  backgroundColor:
                    customer.amountDue > 0
                      ? theme.palette.error.light
                      : "inherit",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover, // Add hover effect
                  },
                }}
              >
                {Object.entries(customer).map(([key, value], idx) => (
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
