import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Minutes",
        data: [30, 45, 60, 50, 70, 80, 90],
        borderColor: "#2a69ac",
        backgroundColor: "#2a69ac",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activity Over the Past Week',
      },
    },
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="blue.600" color="white" py={4}>
          <Container maxW="container.xl">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">Fitness Tracker</Heading>
              <HStack spacing={8}>
                <Link href="#">Home</Link>
                <Link href="#">Profile</Link>
                <Link href="#">Settings</Link>
              </HStack>
            </Flex>
          </Container>
        </Box>

        {/* Main Section */}
        <Box as="main" flex="1" py={10}>
          <Container maxW="container.md">
            <VStack spacing={8}>
              <Box textAlign="center">
                <Heading as="h2" size="xl">Dashboard</Heading>
              </Box>
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Text fontSize="lg">Steps Taken: 10,000</Text>
              </Box>
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Text fontSize="lg">Calories Burned: 500</Text>
              </Box>
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Text fontSize="lg">Active Minutes: 60</Text>
              </Box>
              <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                <Line data={data} options={options} />
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" py={4}>
          <Container maxW="container.xl">
            <Text textAlign="center">© 2023 Fitness Tracker. All rights reserved.</Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;