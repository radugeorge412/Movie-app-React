import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
function PaginationCustom({ setPage, numOfPages = 10 }) {
  const pageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
          count={numOfPages}
          onChange={(e) => pageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}

export default PaginationCustom;
