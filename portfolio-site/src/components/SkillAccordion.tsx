import Accordion from 'react-bootstrap/Accordion'

export const SkillAccordion = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Skill</Accordion.Header>
                    <Accordion.Body>
                        Skill Details
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Skill</Accordion.Header>
                    <Accordion.Body>
                        Skill Details
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Skill</Accordion.Header>
                    <Accordion.Body>
                        Skill Details
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};