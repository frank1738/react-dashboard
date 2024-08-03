import MobileTable from './mobile/MobileTable';
import { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Table.css';
import { useThemeContext } from '../../context/themeContext';

const Table = ({ columns, data, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const { darkTheme } = useThemeContext();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  const options = {
    filterType: 'checkbox',
    elevation: 0,
    rowsPerPage: 8,
    responsive: 'standard',
    rowsPerPageOptions: [5, 10, 20, 30],
    filter: true,
    filterArrayFullMatch: false,
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: 'var(--font-family-bai)',
      },
      palette: {
        background: {
          paper: 'var(--clr-primary)',
          default: ' --clr-primar-light',
        },
        mode: darkTheme ? 'dark' : 'light',
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
            },
          },
        },
      },
    });

  return (
    <div>
      {isMobile ? (
        <div className="mobile-table-container">
          <MobileTable data={data} columns={columns} />
        </div>
      ) : (
        <div className="desktop-table-container">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={title}
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Table;
