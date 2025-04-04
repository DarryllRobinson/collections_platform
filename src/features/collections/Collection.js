import React from "react";
import { useLoaderData } from "react-router";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  useMediaQuery, // Correct import for useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import global theme
import { collectionService } from "./collection.service";

export async function collectionLoader({ params }) {
  const collection = await collectionService.getById({
    id: params.collectionId,
  });
  if (!collection) {
    throw new Response("Not Found", { status: 404 });
  }
  return { collection };
}

// TODO: Consider using a data grid for better performance and features
// https://mui.com/x/react-data-grid/getting-started/overview/

export default function Collection() {
  const { collection } = useLoaderData();
  const theme = useTheme(); // Access global theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens

  if (!collection) {
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
          Collection Record Not Found
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
        Collection Record {collection.caseNumber}
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
          <TableBody>
            {Object.entries(collection).map(([key, value]) => (
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
