import * as React from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MenuItem from '@mui/material/MenuItem';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





export default function AddingNewGroup(){
    const currencies = [
        {
          value: 'SGD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
    // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    // const handleChange1 = (newValue) => {
    //     setValue(newValue);
    // };

    const [currency, setCurrency] = React.useState('SGD');
   
   
    const allUsers = ['Mary', 'poppy']  // need to call user MS
    const groupMembers = ''


   
    const handleChange1 = (event) => {
        
      };

    const handleChange2 = (event) => {
        setCurrency(event.target.value);
      };
    return(
        <>
            <Container fluid="sm" className='mt-5   '>
                <Row className = 'mx-4'>
                    <TextField id="outlined-basic" label="Group Name" variant="outlined"  />
                </Row>
                <br/>
                <Row className = 'mx-4'>
                    <TextField id="outlined-basic" label="Group Admin" variant="outlined"  />
                </Row>
                <br/>
                <Row className = 'mx-4'>
                    <TextField id="outlined-basic" label="Trip Duration" variant="outlined" placeholder ='DD/MM/YY - DD/MM/YY' />
                </Row>
                <br/>
                
                <Row className = 'mx-4'>
                    <TextField
                            id="outlined-select-currency"
                            select
                            label="Group Members"
                            value={groupMembers}
                            onChange={handleChange1}
                            helperText=""
                            
                        >
                            {allUsers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                </Row>
                <br/>
               
                <Row className = 'mx-4'>
                   
                    <input type='file' variant='outlined' label="Group Image"></input>
                </Row>
                <br/>
                <Row className = 'mx-4'>         
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Home Currency"
                        value={currency}
                        onChange={handleChange2}
                        helperText=""
                        
                    >
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </Row>
                <br/>
                <Row className = 'mx-4'>
                    <Button variant="contained">Create Group</Button>
                </Row>
                
            
            </Container>
                    
        </>

    );
}

/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                    label="Group Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange1}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <DesktopDatePicker
                    label="Group End Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange1}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange1}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider> */


// // for the display of receipts
// export default function MasonryImageList() {
//   return (
//     <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
// ];

// // for the table of transactions display
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataGridDemo() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }
