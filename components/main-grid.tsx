import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Pagination } from '@mui/material';

export default function MainGrid() {
  // Sample data for cards
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`));

  // Pagination state
  const [page, setPage] = useState<number>(1);
  const itemsPerPage: number = 6;

  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate the range of items to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Items to display for the current page
  const pageItems = items.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    <Grid container spacing={3}>
      {pageItems.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item}</Typography>
              {/* Add more content as needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          shape="rounded"
        />
      </Grid>
    </Grid>
  );
};

