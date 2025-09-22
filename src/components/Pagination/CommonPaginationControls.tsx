import { Box, Stack } from "@mui/material";
import { JSX } from "react";
import { Pagination } from ".";

export function CommonPaginationControls(): JSX.Element {
    return <Stack direction="row" alignItems="center">
        <Box>
            <Pagination.PageLimitSelector autoWidth label="Limit" />
        </Box>
        <Pagination.CommonPageButtons />
    </Stack>
}