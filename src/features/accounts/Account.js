import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { accountService } from "./account.service";
import { caseService } from "features/cases/case.service";

export async function accountLoader({ params }) {
  // console.log("Account Loader Params:", params);
  const account = await accountService.getById({
    id: params.accountId,
  });
  if (!account) {
    throw new Response("Acount Not Found", { status: 404 });
  }

  const cases = await caseService.getAllByAccountNumber({
    id: params.accountId,
  });
  if (!cases) {
    throw new Response("Cases Not Found", { status: 404 });
  }

  return { account, cases };
}

// TODO: Consider using a data grid for better performance and features
// https://mui.com/x/react-data-grid/getting-started/overview/

export default function Account() {
  const { account, cases } = useLoaderData();
  console.log("Account:", account);
  console.log("Cases:", cases);
  const theme = useTheme(); // Access global theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens
  const navigate = useNavigate();

  // Function to check if there are any cases
  const hasCases = () => cases && cases.length > 0;

  if (!account) {
    return (
      <Box
        sx={{
          padding: theme.spacing(4),
          backgroundColor: theme.palette.background.default,
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
        }}
      >
        <Typography variant="h4" gutterBottom>
          Account Record Not Found
        </Typography>
      </Box>
    );
  }

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
        Account Record {account.accountNumber}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: theme.spacing(2) }}
        onClick={
          hasCases()
            ? () => navigate(`/case/${cases[0].caseNumber}`) // Navigate to Case.js
            : () => alert("Under development") // Placeholder for creating a case
        }
      >
        {hasCases() ? "Open Case" : "Create Case"}
      </Button>
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
          <TableBody>
            {Object.entries(account).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell
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
                  {key}
                </TableCell>
                <TableCell
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
