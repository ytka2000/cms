import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", margin: "100px auto" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
