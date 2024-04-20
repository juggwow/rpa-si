import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Pagination,TextField, Box, CardActionArea, Avatar } from '@mui/material';
import { mockData } from '@/mock-data';
type RPAMain = {
  id: number,
  title: string,
  detail: string,
  user: string,
  readCount: number,
  image: string
}

const mockImg = [
  "https://www.itconvergence.com/wp-content/uploads/2019/03/2018-11-23-1.png",
  "https://www.globalsign.com/application/files/8916/5649/2751/General_Blog_16_main_bg_INME_06_29_2022.jpg",
  "https://www.cio.com/wp-content/uploads/2023/05/istock-1170477183-100905892-orig.jpg",
  "https://images.ctfassets.net/5965pury2lcm/9sWWmmtfv4Miu2qnCynxH/ceb7591a48631481b724ca1a794f00fb/Business_Processes_in_which_RPA_can_be_used.png",
]

export default function MainGrid() {
  const mock = mockData as RPAMain[]
  // Sample data for cards
  const [items, setItems] = useState(mock);

  // Pagination state
  const [page, setPage] = useState<number>(1);
  const itemsPerPage: number = 10;

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
    <Box className="flex flex-col items-center">
      <TextField id="outlined-basic" label="ค้นหา" variant="outlined" className='w-full max-w-[684px] mt-3' />
      <Pagination
          className='my-3'
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            shape="rounded"
          />
      {pageItems.map(val=> (
        <Card key={val.id} className='max-w-[684px] mb-3'>
        <CardActionArea>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <img src={mockImg[Math.floor(Math.random() * 4)]}/>
            </Grid>
            <Grid item xs={8}>
              <Typography id="header-rpa" className='text-lg'>
                {val.title}
              </Typography>
              <Typography id="reading-rpa" className='text-xs'>
                อ่าน : {val.readCount} ครั้ง
              </Typography>
              <Typography id="title-rpa" className='text-sm mt-3'>
                {val.detail}
              </Typography>
              <Typography id="by-rpa" className='text-xs mt-3'>
                สูตรอาหารโดย
              </Typography>
              <Box id="creator-rpa" className="flex flex-row flex-wrap justify-start gap-3 items-center">
                <Avatar alt="Remy Sharp" src={val.image} />
                <Typography className='text-sm'>{val.user}</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
      ))}
      <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            shape="rounded"
          />

    </Box>
  );
};

