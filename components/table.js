import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ liff }) {
  const [results, setResult] = useState({
    os: '',
    lang: '',
    version: '',
    lineVersion: '',
    inClient: false,
    loggedIn: false
  });

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      liff.login({redirectUri: 'http:localhost:3000/'});
    }
    setResult({
      ...results,
      ...{
        os: liff.getOS(),
        lang: liff.getLanguage(),
        version: liff.getVersion(),
        lineVersion: `${liff.getLineVersion()}`,
        inClient: `${liff.isInClient()}`,
        loggedIn: `${liff.isLoggedIn()}`
      }
    })
  }, [liff, results])

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>item</TableCell>
            <TableCell>result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(results).map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item}</TableCell>
              <TableCell>{results[item]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
