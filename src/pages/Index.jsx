import React, { useState } from "react";
import { Box, Grid, GridItem, Input, Button, useToast, Text, Select, VStack, HStack, Flex, Heading } from "@chakra-ui/react";
import { FaSyncAlt, FaLightbulb, FaCheck } from "react-icons/fa";

// Simple Sudoku generator placeholder
// In a real-world scenario, you would replace this with an actual Sudoku generator
const generateSudoku = (difficulty) => {
  const puzzle = new Array(9).fill(null).map(() => new Array(9).fill(""));
  // Add some random numbers to the grid based on difficulty
  for (let i = 0; i < difficulty; i++) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    const num = Math.ceil(Math.random() * 9);
    puzzle[row][col] = num.toString();
  }
  return puzzle;
};

const Index = () => {
  const toast = useToast();
  const [difficulty, setDifficulty] = useState("5");
  const [puzzle, setPuzzle] = useState(generateSudoku(Number(difficulty)));

  const handleInputChange = (e, row, col) => {
    const updatedPuzzle = [...puzzle];
    updatedPuzzle[row][col] = e.target.value;
    setPuzzle(updatedPuzzle);
  };

  const handleGenerateNewPuzzle = () => {
    setPuzzle(generateSudoku(Number(difficulty)));
  };

  const handleCheckProgress = () => {
    // Placeholder for actual Sudoku game progress checking logic
    toast({
      title: "Checking progress...",
      description: "This is just a placeholder, replace with real logic!",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleGetHint = () => {
    // Placeholder for hint logic
    toast({
      title: "Getting a hint...",
      description: "Another placeholder, replace with real hint logic!",
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack p={8} spacing={6}>
      <Heading as="h1" size="xl">
        Sudoku App
      </Heading>
      <HStack width="100%" justify="space-between">
        <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} width="auto">
          <option value="5">Easy</option>
          <option value="15">Medium</option>
          <option value="25">Hard</option>
        </Select>
        <Button leftIcon={<FaSyncAlt />} onClick={handleGenerateNewPuzzle}>
          New Puzzle
        </Button>
      </HStack>
      <Grid templateColumns="repeat(9, 1fr)" gap={2} width="100%">
        {puzzle.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <GridItem key={`${rowIndex}-${colIndex}`} w="40px" h="40px">
              <Input value={value} onChange={(e) => handleInputChange(e, rowIndex, colIndex)} maxLength="1" textAlign="center" isReadOnly={value !== ""} />
            </GridItem>
          )),
        )}
      </Grid>
      <Flex justify="space-between" width="100%">
        <Button leftIcon={<FaCheck />} onClick={handleCheckProgress}>
          Check
        </Button>
        <Button leftIcon={<FaLightbulb />} onClick={handleGetHint}>
          Hint
        </Button>
      </Flex>
    </VStack>
  );
};

export default Index;
