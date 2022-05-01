import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const MistakesTable: React.FC<{data: any}> = (props) => {

    const {data} = props

    console.log('data: ' , data)
    

    const createData = (word: string, mistakes: number) => {
        return { word, mistakes };
    }
        
    
    const rows = [
        createData(data[9] && data[9].text, data[9] && data[9].mistakes),
        createData(data[8] && data[8].text, data[8] && data[8].mistakes),
        createData(data[7] && data[7].text, data[7] && data[7].mistakes),
        createData(data[6] && data[6].text, data[6] && data[6].mistakes),
        createData(data[5] && data[5].text, data[5] && data[5].mistakes),
        createData(data[4] && data[4].text, data[4] && data[4].mistakes),
        createData(data[3] && data[3].text, data[3] && data[3].mistakes),
        createData(data[2] && data[2].text, data[2] && data[2].mistakes),
        createData(data[1] && data[1].text, data[1] && data[1].mistakes),
        createData(data[0] && data[0].text, data[0] && data[0].mistakes)
    ] 
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 325 }} >
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontSize: '20px'}}>Word</TableCell>
            <TableCell align="center" style={{fontSize: '20px'}}>Mistakes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => {
            return (
            <TableRow
              key={row.word}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.word}
              </TableCell>
              <TableCell align="center">{row.mistakes}</TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MistakesTable;