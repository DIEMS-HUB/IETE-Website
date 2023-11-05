import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class SandCTeam extends Component {
    render() {
        return (
            <Table striped bordered hover className='associate-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Social Media and Creative Associates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Akshay Manza</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bhausaheb Chavan</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bhushan Mule</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Chinmayi Kulkarni</td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Dhanush Gore</td>

                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Pratik Kodale</td>

                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Vishal Khairnar</td>

                    </tr>


                    <tr>
                        <td>8</td>
                        <td>Parth Shewale</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Prasad Kolhe</td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>Yash Chavan</td>

                    </tr>



                </tbody>
            </Table>

        );
    }
}

export default SandCTeam;