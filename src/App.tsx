import { Box, Container, Stack } from '@mui/material';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <Container sx={{ padding: "20px 10px" }}>
      <Pagination>
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
