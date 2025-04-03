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
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Clients
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem key={client.id}>
            <ListItemText
              primary={client.clientName}
              secondary={`Ref No: ${client.id}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
