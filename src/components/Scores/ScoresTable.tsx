import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ScoreTable: React.FC<{data: any}> = (props) => {

    const {data} = props

    const average = (arr: any )=> arr.reduce( ( p: any, c: any ) => p + c, 0 ) / arr.length;

    const qwertyData = data && data.filter((score: any)=> score.type == 'qwerty')
    const dvorakData = data && data.filter((score: any)=> score.type == 'dvorak')
    const colemarkData = data && data.filter((score: any)=> score.type == 'colemark')

    const qwertyScores = qwertyData && qwertyData.map((score: any) => score.score);
    const dvorakScores = dvorakData && dvorakData.map((score: any) => score.score);
    const colemarkScores = colemarkData && colemarkData.map((score: any) => score.score);

    const createData = (name: string, speed: number, total: number, max: number) => {
        return { name, speed, total, max };
    }
        
    const rows = [
        createData('QWERTY', qwertyScores && average(qwertyScores), qwertyData && qwertyData.length, qwertyScores && Math.max(...qwertyScores)),
        createData('DVORAK', dvorakScores && average(dvorakScores), dvorakData && dvorakData.length, dvorakScores && Math.max(...dvorakScores)),
        createData('COLEMARK', colemarkScores && average(colemarkScores), colemarkData && colemarkData.length, colemarkScores && Math.max(...colemarkScores)),
    ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Keyboard Type</TableCell>
            <TableCell align="right">Average Speed</TableCell>
            <TableCell align="right">Total Tests</TableCell>
            <TableCell align="right">Top Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.max}</TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ScoreTable;