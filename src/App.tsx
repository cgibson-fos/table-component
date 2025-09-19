import { Box, Container, Stack } from '@mui/material';
import { Pagination } from './components/Pagination';
import { UsersTable } from './components/UsersTable';
import { UsersProvider } from './components/UsersProvider';
import { Table } from './components/Table';

function App() {
  return (
    <Container sx={{ padding: "20px 10px" }}>
      <Pagination>
        <Box sx={{ mb: '20px' }}>
          <UsersProvider>
            <UsersTable>
              <Table.Headers />
              <Table.Body />
            </UsersTable>
          </UsersProvider>
        </Box>
        <Container>
          <Stack direction="row" alignItems="center">
            <Box>
              <Pagination.PageLimitSelector autoWidth label="Limit" />
            </Box>
            <Pagination.CommonPageButtons />
          </Stack>
        </Container>
      </Pagination>
    </Container>
  );
}

export default App;
