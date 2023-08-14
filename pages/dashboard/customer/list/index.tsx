import Breadcrumb from '../../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../../src/components/container/PageContainer';

import BlankCard from '../../../../src/components/shared/BlankCard';
import CustomerListTable from '../../../../src/components/dashboard/ProductTableList/ListCustomerTable';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'List Customer',
  },
];

export default function EcomProductList() {

  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="List Customer" items={BCrumb} />
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <CustomerListTable />
      </BlankCard>
    </PageContainer>
  );
};

