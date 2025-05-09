import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type DetailedProjectCardProps = {
    title: string;
    description: string;
    date: string;
    company: string;
    imageUrl: string;
    skills: string[];
};

export const DetailedProjectCard = ({
    title,
    description,
    date,
    company,
    imageUrl,
    skills
}: DetailedProjectCardProps) => {
    return (
        <Card className="border-0 card-hover bg-transparent text-light">
            {imageUrl && (
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={title}
                    className="img-fluid m-5 mx-auto"
                    style={{ objectFit: 'contain', maxHeight: '150px', filter: 'invert(1) brightness(2)'}}
                />
            )}
            <Row className="m-1" md={12}>
                <Col className="text-start">
                    <Card.Title className="text-purple">{title}</Card.Title>
                    <Card.Subtitle className="my-1 text-secondary">{company}</Card.Subtitle>
                </Col>
                <Col className="text-start mt-1" md={12}>
                    <Card.Subtitle>{date}</Card.Subtitle>
                </Col>
            </Row>
            <Card.Body className="text-start d-flex flex-column justify-content-between">
  <div id="project-description">
    {description}
  </div>
  <div className="mt-3">
    {skills.map((skill, index) => (
      <Button key={index} className="me-2 mt-2 skill-button border-0 rounded-4 p-2" size="sm" disabled>
        {skill}
      </Button>
    ))}
  </div>
</Card.Body>
        </Card>
    );
};
