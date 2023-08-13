import React from "react";
import { useEffect, useState } from 'react';
import { Box, Grid } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";

import TopCards from "../../../src/components/dashboards/modern/TopCards";
import RevenueUpdates from "../../../src/components/dashboards/modern/RevenueUpdates";
import YearlyBreakup from "../../../src/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "../../../src/components/dashboards/modern/MonthlyEarnings";
import EmployeeSalary from "../../../src/components/dashboards/modern/EmployeeSalary";
import Customers from "../../../src/components/dashboards/modern/Customers";
import Projects from "../../../src/components/dashboards/modern/Projects";
import Social from "../../../src/components/dashboards/modern/Social";
import SellingProducts from "../../../src/components/dashboards/modern/SellingProducts";
import WeeklyStats from "../../../src/components/dashboards/modern/WeeklyStats";
import TopPerformers from "../../../src/components/dashboards/modern/TopPerformers";
import Welcome from "../../../src/layouts/full/shared/welcome/Welcome";

export default function Modern() {


  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer>
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>

                <Customers isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Projects isLoading={isLoading} />

              </Grid>
              <Grid item xs={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <TopPerformers />
          </Grid>
        </Grid>
        {/* column */}
        <Welcome />
      </Box>
    </PageContainer>
  );
};

