import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available props
const theme = {
    background: '#FFFFFF',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FFFFFF',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

const steps = [
    
        {
          id: '1',
          message: "Hi! My name's Nemo 👋",
          trigger: '2',
        },
        {
          id: '2',
          message: "I'm a submarine and I live at the Porthcurno Telegraph Museum in Cornwall",
          trigger: '3'

        },
        {
          id: '3',
          options: [
            { value: 1, label: "Whats a submarine?!", trigger: '4' },
            { value: 2, label: "Great! 👋", end: true },
          ],
        },
        {
          id: '4',
          message: "We submarines are vessels that can roam around deep at sea 🐳",
          trigger: '5',
        },
        {
          id: '5',
          message: "Like underwater boats!",
          end: true,
        },
      
  ];

  const ThemedExample = () => (
    <ThemeProvider theme={theme}>
      <ChatBot style={{ 'boxShadow': 'none' }} steps={steps} />
    </ThemeProvider>
  );
  

ReactDOM.render(<ThemedExample />, document.getElementById('app'));