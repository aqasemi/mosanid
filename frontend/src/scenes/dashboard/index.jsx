import { Box, Chip, Typography, useTheme, Paper } from "@mui/material";
import { tokens } from "../../theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  studentData,
  statusColors,
  mockTransactions,
} from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box mb="20px">
        <Box display="flex" flexDirection="column" alignItems="start" mb="10px">
          <Typography
            variant="h2"
            sx={{ color: "white", fontWeight: "bold", mb: "5px" }}
          >
            Dashboard
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ mb: "5px" }}
          >
            CPCS-203 Programming (II)
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="textPrimary">
            Chapter 8: Objects and Classes competition
          </Typography>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="80%"
            subtitle="Correct answers"
            progress="0.75"
            change="14%"
            icon={
              <CheckCircleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="20%"
            subtitle="Wrong answers"
            progress="0.20"
            change="-10%"
            icon={
              <CancelIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2 minutes"
            subtitle="Average Time spent"
            progress="0.30"
            change="5%"
            icon={
              <AlarmOnIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="90%"
            subtitle="Engagement"
            progress="0.80"
            change="93%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Student statistics
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: colors.primary[400] }}
            >
              <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Student Number</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Submission Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.duration}</TableCell>
                      <TableCell>{student.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={student.status}
                          sx={{
                            backgroundColor: statusColors[student.status],
                            color: "#fff",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ minWidth: 35 }}
                          >
                            {`${student.progress}%`}
                          </Typography>
                          <ProgressCircle
                            variant="determinate"
                            value={student.progress}
                            sx={{ width: "100%", marginLeft: 1 }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Question statistics
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: colors.primary[400] }}
            >
              <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Question Number</TableCell>
                    <TableCell>Average Duration</TableCell>
                    <TableCell>Accuracy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockTransactions.map((row) => (
                    <TableRow
                      key={row.txId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.Questionnumber}</TableCell>
                      <TableCell>{row.AverageDuration}</TableCell>
                      <TableCell>{row.Accuracy}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
