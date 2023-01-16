import React, { useState, useCallback} from 'react';
import { Container } from './App.styled';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const App = () =>  {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const feedback = ['good','neutral', 'bad'];
    const total = good + neutral + bad;
    
   const incrementFeedback = useCallback((event)=> {
       const { name } = event.target;

   switch (name) {
     case 'good':
       setGood(prevGood => prevGood + 1);
       break;
     case 'neutral':
       setNeutral(prevNeutral => prevNeutral + 1);
       break;
     case 'bad':
       setBad(prevBad => prevBad + 1);
       break;

     default:
       return;
   }
   }, [])  ;
    
  const countPositiveFeedbackPercentage = (total, good) => {
    if (!total) {
      return 0;
    }
    return Math.round((good * 100) / total);
  }
    return (
      <Container>
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={incrementFeedback}
          />
        </Section>

        {total ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total, good)}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Container>
    );
  }

export default App;