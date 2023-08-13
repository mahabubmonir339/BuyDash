import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../src/components/container/PageContainer';
import TicketListing from '../../../src/components/apps/tickets/TicketListing';
import TicketFilter from '../../../src/components/apps/tickets/TicketFilter';
import ChildCard from '../../../src/components/shared/ChildCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tickets',
  },
];

export default function TicketList() {

  return (
    <PageContainer>
      <Breadcrumb title="Tickets app" items={BCrumb} />
      <ChildCard>
        <TicketFilter />
        <TicketListing />
      </ChildCard>
    </PageContainer>
  );
};

