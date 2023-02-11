import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BiGroup, BiPhone, BiTimer } from 'react-icons/bi';
import { IconType } from '@react-icons/all-files';
import { IoFootsteps } from 'react-icons/io5';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    padding:"0",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(5),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Inter',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
 
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}


interface StyledTabProps {
  label: string;
  icon?:any;
}


export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box mt={2} sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab icon={<IoFootsteps size={28 }/>}   label="Footfall & Conversion" />
          <AntTab icon={<BiGroup size={28 }/>}   label="Demographic" />
          <AntTab icon={<BiTimer size={28 }/>} label="Dwell Time" />
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
