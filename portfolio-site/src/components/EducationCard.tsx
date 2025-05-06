import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type EducationCardProps = {
    title: string;
    description:string;
    school: string;
    date: string;
    location: string;
}

export const EducationCard = ({title, description, date, location, school}: EducationCardProps) => {
    return(
        <Card className='border-0 card-hover'>
            <Row className='m-1'>
                <Col className='text-start'>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className='my-1'>{school}</Card.Subtitle>
                <Card.Subtitle className='my-1 text-muted'>{location}</Card.Subtitle>
                </Col>
                <Col className='text-end m-1'>
                <Card.Subtitle>{date}</Card.Subtitle>
                </Col>
            </Row>
            <Card.Body className='text-start'>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
};