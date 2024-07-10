import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ComprehensionChart from "../../components/ComprehensionChart";

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "#0f0f2e",
  padding: theme.spacing(3),
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "#512da8",
  color: "#fff",
  padding: theme.spacing(3),
  textAlign: "center",
}));

const CourseCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1e1e2e",
  color: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  flex: "1 1 calc(25% - 16px)",
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  position: "relative",
  overflow: "visible",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#6C7CF7",
  color: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5B6AD1",
  },
}));

const CompetitionCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1e1e2e",
  color: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  flex: "1 1 calc(25% - 16px)",
  margin: theme.spacing(1),
  padding: theme.spacing(2),
}));

const EnrolledCoursesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

const StudentHomePage = () => {
  return (
    <Box display="flex">
      <Content>
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
            Enrolled courses
          </Typography>
          <EnrolledCoursesContainer>
            <CourseCard>
              <CardContent>
                <Typography variant="h6">CPCS-203 Programming (II)</Typography>
                <Typography variant="body2">Section: B1</Typography>
                <Typography variant="body2">Instructor: Mohammed Alghamdi</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard>
            <CourseCard>
              <CardContent>
                <Typography variant="h6">CPIS-334 Software Project Management</Typography>
                <Typography variant="body2">Section: C1</Typography>
                <Typography variant="body2">Instructor: Faiz Ahmed</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard>
            <CourseCard>
              <CardContent>
                <Typography variant="h6">MRKT-260 Principles of Marketing</Typography>
                <Typography variant="body2">Section: A1</Typography>
                <Typography variant="body2">Instructor: Salem Khalid</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard>
            <CourseCard>
              <CardContent>
                <Typography variant="h6">BUS-232 Modern Business Models</Typography>
                <Typography variant="body2">Section: B1</Typography>
                <Typography variant="body2">Instructor: Saud Mohammed</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard>  <CourseCard>
              <CardContent>
                <Typography variant="h6">BUS-232 Modern Business Models</Typography>
                <Typography variant="body2">Section: B1</Typography>
                <Typography variant="body2">Instructor: Saud Mohammed</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard><CourseCard>
              <CardContent>
                <Typography variant="h6">BUS-232 Modern Business Models</Typography>
                <Typography variant="body2">Section: B1</Typography>
                <Typography variant="body2">Instructor: Saud Mohammed</Typography>
                <CustomButton variant="contained">
                  Practice Now
                </CustomButton>
              </CardContent>
            </CourseCard>
          </EnrolledCoursesContainer>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
            Ongoing Competitions
          </Typography>
          <Box display="flex" flexWrap="wrap">
            <CompetitionCard>
              <CardContent>
                <Typography variant="h6">Chapter 8: Objects and Classes</Typography>
                <Typography variant="body2">CPCS-203 Programming (II)</Typography>
                <Typography variant="body2">23 students</Typography>
                <Typography variant="body2">Instructor: Mohammed Alghamdi</Typography>
                <Typography variant="body2">11/07/2024 8:00PM - 9:00PM</Typography>
                <CustomButton variant="contained">
                  Begin
                </CustomButton>
              </CardContent>
            </CompetitionCard>
            <CompetitionCard>
              <CardContent>
                <Typography variant="h6">Chapter 6: Project Time Manager</Typography>
                <Typography variant="body2">CPIS-334 Software Project Management</Typography>
                <Typography variant="body2">23 students</Typography>
                <Typography variant="body2">Instructor: Faiz Ahmed</Typography>
                <Typography variant="body2">12/08/2024 9:00AM - 10:00AM</Typography>
                <CustomButton variant="contained">
                  Begin
                </CustomButton>
              </CardContent>
            </CompetitionCard>
            <CompetitionCard>
              <CardContent>
                <Typography variant="h6">Chapter 3: Analyzing the Marketing Environment</Typography>
                <Typography variant="body2">MRKT-260 Principles of Marketing</Typography>
                <Typography variant="body2">23 students</Typography>
                <Typography variant="body2">Instructor: Salem Khalid</Typography>
                <Typography variant="body2">11/07/2024 8:00PM - 9:00PM</Typography>
                <CustomButton variant="contained">
                  Begin
                </CustomButton>
              </CardContent>
            </CompetitionCard>
            <CompetitionCard>
              <CardContent>
                <Typography variant="h6">Chapter 1: Planning</Typography>
                <Typography variant="body2">BUS-232 Modern Business Models</Typography>
                <Typography variant="body2">23 students</Typography>
                <Typography variant="body2">Instructor: Saud Mohammed</Typography>
                <Typography variant="body2">11/07/2024 8:00PM - 9:00PM</Typography>
                <CustomButton variant="contained">
                  Begin
                </CustomButton>
              </CardContent>
            </CompetitionCard>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
            Comprehension of each course
          </Typography>
          <ComprehensionChart />
        </Box>
      </Content>
    </Box>
  );
};

export default StudentHomePage;