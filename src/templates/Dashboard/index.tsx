import { Flex } from '@chakra-ui/react';

import Header from 'components/Header';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import Title from 'components/Title';

const Dashboard = () => {
  return (
    <Flex width="100vw">
      <Sidebar />
      <Header />
      <Main>
        <Title>Foi</Title>
      </Main>
    </Flex>
  );
};

export default Dashboard;
