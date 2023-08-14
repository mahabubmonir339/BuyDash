import React from "react";
import { useEffect, useState } from 'react';
import { Box, Grid } from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";

import TopCards from "../../src/components/dashboard/modern/TopCards";
import RevenueUpdates from "../../src/components/dashboard/modern/RevenueUpdates";
import YearlyBreakup from "../../src/components/dashboard/modern/YearlyBreakup";
import MonthlyEarnings from "../../src/components/dashboard/modern/MonthlyEarnings";
import EmployeeSalary from "../../src/components/dashboard/modern/EmployeeSalary";
import Customers from "../../src/components/dashboard/modern/Customers";
import Projects from "../../src/components/dashboard/modern/Projects";
import Social from "../../src/components/dashboard/modern/Social";
import SellingProducts from "../../src/components/dashboard/modern/SellingProducts";
import WeeklyStats from "../../src/components/dashboard/modern/WeeklyStats";
import TopPerformers from "../../src/components/dashboard/modern/TopPerformers";
import Welcome from "../../src/layouts/full/shared/welcome/Welcome";

export default function Dashboard() {


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

