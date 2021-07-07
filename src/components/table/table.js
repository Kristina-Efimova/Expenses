import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
// import { Table } from 'reactstrap';
import './table.css'

const Example = () => {
    return (
      <span>
          <label className='balance'>Баланс</label>
          <label className='currentAccount'>0 рублей</label>
          <br/>
          <hr/>
          <label className='income'>Доходы</label>
          <label className='expenditure'>Расходы</label>


          {/*<table border="1px" width="1px" height="200px"></table>*/}

      </span>

    // <Card>
    //     <CardHeader >
    //         <label className='balance'>Баланс</label>
    //         <label className='currentAccount'>0 рублей</label>
    //     </CardHeader>
    //     <br/>
    //     <CardBody>
    //         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //         <Button>Расход</Button>
    //         <Button>Доход</Button>
    //     </CardBody>
    // </Card>
    );
}

export default Example;