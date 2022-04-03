import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Chip } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 0,
};

export default function JobModal() {
  let { id } = useParams();
  console.log(id);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };
  const jobs = useSearch().arr;
  let job;
  job = jobs.filter((job) => job.id === id)[0];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card>
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: 30 }} gutterBottom noWrap>
              {job.title}
            </Typography>
            <Divider />
            <Typography variant="body2" paragraph className="job-description">
              {job.description} <br />
              <br />
              Skills: <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: 1,
                mb: 2,
              }}
            >
              {job.skills.slice(0, 4).map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  className="job-skill"
                  color="error"
                  size="small"
                />
              ))}
            </Box>

            <Typography variant="body2" paragraph className="job-description">
              City: {job.city} <br />
              Salary: {job.salaryLow} - {job.salaryHigh} <br />
              Require: {job.yrsXPExpected} years of experiences. <br />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}
