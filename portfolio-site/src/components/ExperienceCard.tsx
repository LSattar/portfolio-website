import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type ExperienceCardProps = {
    title: string;
    description:string;
    company: string;
    date: string;
    location: string;
}

export const ExperienceCard = ({title, description, date, location, company}: ExperienceCardProps) => {
    return(
        <Card className='border-0 card-hover bg-transparent text-light'>
            <Row className='m-1'>
                <Col className='text-start'>
                <Card.Title className='hover-underline-animation'>{title}</Card.Title>
                <Card.Subtitle className='my-1'>{company}</Card.Subtitle>
                <Card.Subtitle className='my-1 text-secondary'>{location}</Card.Subtitle>
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