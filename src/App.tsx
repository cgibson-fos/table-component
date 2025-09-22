import { Box, Container } from '@mui/material';
import { Pagination } from './components/Pagination';
import { UsersTable } from './components/UsersTable';
import { Table } from './components/Table';

function App() {
  return (
    <Container sx={{ padding: "20px 10px" }}>
      <Pagination>
        <Box sx={{ mb: '20px' }}>
          <UsersTable />
        </Box>
        <Container>
          <Pagination.CommonControls />
        </Container>
      </Pagination>
    </Container>
  );
}

export default App;
