import * as React from "react";
import {
  Box,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination, // Import TablePagination
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Stack,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Pagination,
} from "@mui/material";
import { debounce } from "lodash";
import { useRouter } from 'next/router';
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { color } from "@mui/system";

const cvelist=[
    {
        cveid:'CVE-2014-9174',
        description:'Cross-site scripting (XSS) vulnerability in the Google Analytics by Yoast (google-analytics-for-wordpress) plugin before 5.1.3 for WordPress allows remote attackers to inject arbitrary web script or HTML via the "Manually enter your UA code" (manual_ua_code_field) field in the General Settings.',
        cweid:'CWE-79',
        publishedat:' 2014-12-02 16:59:11',
        updatedat:'2017-09-08 01:29:33',
        cvssscore:'MEDIUM',
    }, 
    {
        cveid:'CVE-2014-9174',
        description:'Cross-site scripting (XSS) vulnerability in the Google Analytics by Yoast (google-analytics-for-wordpress) plugin before 5.1.3 for WordPress allows remote attackers to inject arbitrary web script or HTML via the "Manually enter your UA code" (manual_ua_code_field) field in the General Settings.',
        cweid:'CWE-79',
        publishedat:' 2014-12-02 16:59:11',
        updatedat:'2017-09-08 01:29:33',
        cvssscore:'MEDIUM',
    },
    {
        cveid:'CVE-2014-9174',
        description:'Cross-site scripting (XSS) vulnerability in the Google Analytics by Yoast (google-analytics-for-wordpress) plugin before 5.1.3 for WordPress allows remote attackers to inject arbitrary web script or HTML via the "Manually enter your UA code" (manual_ua_code_field) field in the General Settings.',
        cweid:'CWE-79',
        publishedat:' 2014-12-02 16:59:11',
        updatedat:'2017-09-08 01:29:33',
        cvssscore:'MEDIUM',
    },
    {
        cveid:'CVE-2014-9174',
        description:'Cross-site scripting (XSS) vulnerability in the Google Analytics by Yoast (google-analytics-for-wordpress) plugin before 5.1.3 for WordPress allows remote attackers to inject arbitrary web script or HTML via the "Manually enter your UA code" (manual_ua_code_field) field in the General Settings.',
        cweid:'CWE-79',
        publishedat:' 2014-12-02 16:59:11',
        updatedat:'2017-09-08 01:29:33',
        cvssscore:'MEDIUM',
    },
  ]


function factoryclassification() {
    
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const router = useRouter();
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const today = dayjs();
  const options = ['Low', 'Medium', 'High',];


  const handleStartDateChange = (newStartValue) => {
    setStartDate(newStartValue);
  };

  const handleEndDateChange = (newStopValue) => {
    if (startDate) {
      const maxEndDate = dayjs(startDate).add(30, 'days');
      if (dayjs(newStopValue).isAfter(maxEndDate)) {
        // If the selected EndDate is more than 30 days from startDate, reset it
        setEndDate(null);
        alert('The range between start date and stop date should not be more than 30 days.');
      } else {
        setEndDate(newStopValue);
      }
    } else {
      // If there is no startDate selected, set the EndDate directly
      setEndDate(newStopValue);
    }
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5 }}>
            CVE LIST 
          </Typography>
        </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
       
        <Grid container justifyContent="space-between">
        <List sx={{ mb: 2 }} >
        {cvelist.map(({ cveid, description, cweid, publishedat, updatedat, cvssscore }) => (
          <Paper elevation={3} sx={{ backgroundColor: 'white', mb: 2, padding: 2 }} key={cveid}>
            <ListItemButton  onClick={() => router.push(`/cvelist/${cveid}`)} >
              <ListItemText
                primary={cveid}
                secondary={description}
                primaryTypographyProps={{ variant: 'h6' }}  // Increase font size
                secondaryTypographyProps={{ variant: 'body1' }}  // Increase font size
              />
               
            </ListItemButton>
            <Divider />
            <ListItem>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ListItemText primary="CWE ID" secondary={cweid} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ListItemText primary="Published At" secondary={publishedat} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ListItemText primary="Updated At" secondary={updatedat} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ListItemText primary="CVSS Score" secondary={cvssscore} />
                </Grid>
                </Grid>
            </ListItem>
          </Paper>
        ))}
      </List>


    </Grid>
    <Stack spacing={2} alignItems={'center'}>
      <Pagination count={10} page={page}  color="primary" size="large" />
     
    </Stack>
      <Divider sx={{ my: 2 }} />
      
    </Box>
  );
}

export default factoryclassification;
