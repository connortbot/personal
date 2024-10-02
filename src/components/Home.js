import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeContainer = styled(motion.div)`
  width: 80%;
  padding: 150px 80px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 80vh;
`;

const Greeting = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #377047;
  font-family: 'Hanken Grotesk', sans-serif;
  line-height: normal;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: normal;
  color: #6A6A6A;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 400;
  margin: 10px 0;
`;

const Highlight = styled.span`
  color: #377047;
  font-weight: bold;
  cursor: pointer;
`;

const WeakHighlight = styled.span`
  color: #377047;
  font-style: italic;
`;

const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
};


const Home = () => {
    return (
        <HomeContainer
		initial="initial"
		animate="animate"
		exit="exit"
		variants={pageVariants}
		>
            <Greeting>hi, i'm connor {'\u{1F631}'}</Greeting>
            <Description>
                {'\u{1F4BE}'} seeking 2025 internships at places i'll love, such as companies driven by film arts, machine learning, 
                or something <WeakHighlight>interesting and meaningful.</WeakHighlight>
            </Description>
            <Description>
                {'\u{1F4BC}'} prev. senior data <Highlight>@ cohere</Highlight>
            </Description>
            <Description>
                {'\u{1F4D6}'} currently studying computer science {'\u{2795}'} business @ waterloo/laurier
            </Description>
        </HomeContainer>
    );
};
  
export default Home;