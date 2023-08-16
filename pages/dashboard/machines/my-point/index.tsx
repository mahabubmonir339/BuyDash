import Breadcrumb from '../../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../../src/components/container/PageContainer';

import BlankCard from '../../../../src/components/shared/BlankCard';
import MachinesList from '../../../../src/components/dashboard/machines/MyPointTable';

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
      <Breadcrumb title="My Point" items={BCrumb} />
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <MachinesList />
      </BlankCard>
    </PageContainer>
  );
};

