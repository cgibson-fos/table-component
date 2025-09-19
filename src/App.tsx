import { Box, Container, Stack } from '@mui/material';
import { Pagination } from './components/Pagination';
import { UsersTable } from './components/UsersTable';
import { Table } from './components/Table';
import { UsersTableProvider } from './components/UsersTable/provider';

function App() {
  return (
    <Container sx={{ padding: "20px 10px" }}>
      <Pagination>
        <Box sx={{ mb: '20px' }}>
          <UsersTableProvider>
            <UsersTable>
              <Table.Headers />
              <Table.Body />
            </UsersTable>
          </UsersTableProvider>
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
