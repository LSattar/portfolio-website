import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type ExperienceCardProps = {
    title: string;
    description:string;
    company?: string;
    date: string;
    location: string;
    skills: string[];
}

export const ExperienceCard = ({title, description, date, location, company, skills}: ExperienceCardProps) => {
    return(
        <Card className='border-0 card-hover bg-transparent text-light p-3'>
            <Row className='m-1'>
                <Col className='text-start' xl={8}>
                <Card.Title className='hover-underline-animation'>{title}</Card.Title>
                <Card.Subtitle className='my-1'>{company}</Card.Subtitle>
                <Card.Subtitle className='my-1 text-secondary'>{location}</Card.Subtitle>
                </Col >
                <Col className='text-start text-xl-end m-md-1 mt-1'>
                <Card.Subtitle>{date}</Card.Subtitle>
                </Col>
            </Row>
            <Card.Body className='text-start'>
            <Card.Text>
                    {description}
                    <br />
                    {skills.map((skill, index) => (
                        <Button key={index} className="me-2 mt-2 skill-button border-0 rounded-4 p-2" size="sm" disabled>
                            {skill}
                        </Button>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};