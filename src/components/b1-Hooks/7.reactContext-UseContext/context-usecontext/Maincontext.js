import React from 'react';
import { ThemeProvider } from './ThemeContext';
import UseContext from './UseContext';

const Maincontext = () => {
    return (
      <div>
        <ThemeProvider>
          <UseContext></UseContext>
        </ThemeProvider>
      </div>
    );
};

export default Maincontext;