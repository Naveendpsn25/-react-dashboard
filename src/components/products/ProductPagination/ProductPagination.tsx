import "./ProductPagination.scss";

import { Box, Button } from "@mui/material";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function ProductPagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: ProductPaginationProps) {

  const pages: number[] = [];

  const startPage = Math.max(currentPage - 2, 1);

  const endPage = Math.min(
    currentPage + 2,
    totalPages
  );

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <Box className="pagination">

      <Button
        className="arrow-button"
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
      >
        {"<"}
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          className={
            currentPage === page
              ? "page-button active"
              : "page-button"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        className="arrow-button"
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
      >
        {">"}
      </Button>

    </Box>
  );
}