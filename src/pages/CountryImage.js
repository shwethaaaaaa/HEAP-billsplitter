import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'


export default function CountryImage({unsplashdata}){  

   return(
        <>  

                <br></br>
                <img width = "900" height = "700" src= {unsplashdata.results[0].urls.raw} className='img-fluid shadow-4' alt='...' />
              
        </>
    
   )
}


