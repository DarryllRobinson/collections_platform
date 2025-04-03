import React from "react";
import { useLoaderData } from "react-router";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { clientService } from "./clients.service";

export async function clientsLoader() {
  const clients = await clientService.getAll();
  if (!clients) {
    throw new Response("Not Found", { status: 404 });
  }
  return { clients };
}

export default function Clients() {
  const { clients } = useLoaderData();

  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(4),
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: (theme) => theme.shape.borderRadius,
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
      >
        Clients
      </Typography>
      <List
        sx={{
          marginTop: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: (theme) => theme.shape.borderRadius,
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        {clients.map((client) => (
          <ListItem
            key={client.id}
            sx={{
              "&:not(:last-child)": {
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            <ListItemText
              primary={client.clientName}
              secondary={`Ref No: ${client.id}`}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                },
                "& .MuiListItemText-secondary": {
                  color: (theme) => theme.palette.text.secondary,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
