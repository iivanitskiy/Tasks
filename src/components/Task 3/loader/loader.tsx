import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate(): JSX.Element | null {
  return (
    <Box sx={{ display: 'flex', marginTop: 30 }} >
      <CircularProgress size={200}/>
    </Box>
  );
}