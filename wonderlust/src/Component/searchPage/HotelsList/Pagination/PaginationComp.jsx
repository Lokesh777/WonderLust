import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationComp = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="secondary" shape="rounded" />
    </Stack>
  );
};

export default PaginationComp;
