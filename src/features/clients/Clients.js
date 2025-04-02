import React from "react";
import { useLoaderData } from "react-router-dom";
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
  const clients = useLoaderData();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Clients
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem key={client.customerRefNo}>
            <ListItemText
              primary={client.customerName}
              secondary={`Ref No: ${client.customerRefNo}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
