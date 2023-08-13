import { Grid } from '@mui/material';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../src/components/container/PageContainer';
import YearlyBreakup from '../../../src/components/dashboards/modern/YearlyBreakup';
import Projects from '../../../src/components/dashboards/modern/Projects';
import Customers from '../../../src/components/dashboards/modern/Customers';
import SalesTwo from '../../../src/components/dashboards/ecommerce/SalesTwo';
import MonthlyEarnings from '../../../src/components/dashboards/ecommerce/MonthlyEarnings';
import SalesOverview from '../../../src/components/dashboards/ecommerce/SalesOverview';
import RevenueUpdates from '../../../src/components/dashboards/ecommerce/RevenueUpdates';
import YearlySales from '../../../src/components/dashboards/ecommerce/YearlySales';
import MostVisited from '../../../src/components/widgets/charts/MostVisited';
import PageImpressions from '../../../src/components/widgets/charts/PageImpressions';
import Followers from '../../../src/components/widgets/charts/Followers';
import Views from '../../../src/components/widgets/charts/Views';
import Earned from '../../../src/components/widgets/charts/Earned';
import CurrentValue from '../../../src/components/widgets/charts/CurrentValue';
import { useState, useEffect } from 'react';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Charts',
  },
];

export default function WidgetCharts() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Charts" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Followers />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Views />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Earned />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SalesTwo isLoading={isLoading} />
        </Grid>
        <Grid item xs={12}>
          <CurrentValue />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlyBreakup isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <MonthlyEarnings isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <MostVisited />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlySales isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <PageImpressions />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Customers isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Projects isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <RevenueUpdates isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <SalesOverview isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};


