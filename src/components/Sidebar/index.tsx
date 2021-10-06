import { useMemo } from 'react';

import { Flex, List, ListItem, Link, Icon } from '@chakra-ui/react';

import Logo from 'components/Logo';

import SidebarLinks from './data';

const Sidebar = () => {
  const sideBarMenu = useMemo(() => SidebarLinks, []);

  return (
    <Flex
      height="100vh"
      width="200px"
      position="fixed"
      backgroundColor="white"
      boxShadow="lg"
      paddingX="8px"
      flexDirection="column"
      zIndex="overlay"
    >
      <Logo />
      <List width="100%" spacing={3} paddingTop="16px">
        {sideBarMenu.map((menu) => {
          return (
            <Link
              key={menu.id}
              href={menu.href}
              display="flex"
              justifyContent="center"
            >
              <Flex
                width="100%"
                alignItems="center"
                color="blue.300"
                fontSize="16px"
                padding="4px 8px"
              >
                <Icon as={menu.icon} w={4} h={4} color="blue.300" />
                <ListItem marginLeft="16px">{menu.label}</ListItem>
              </Flex>
            </Link>
          );
        })}
      </List>
    </Flex>
  );
};

export default Sidebar;
