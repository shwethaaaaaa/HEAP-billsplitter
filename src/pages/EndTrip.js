import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';

export default function EndTrip(){
    return(
    <Container>
                <Row>
                    <TextField id="outlined-basic" label="Amount to be Paid" variant="outlined" />
                    
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Paid To" variant="outlined" />
                </Row>
                <Row>
                    <p>Payment Options:</p>
                </Row>
    </Container>
    )
}