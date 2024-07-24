import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import NotaCreationForm from '../../Nota/nota-create';

function CustNavTabs() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Crear Nota</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" disabled>Also disabled</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <NotaCreationForm />
      </Card.Body>
    </Card>
  );
}

export default CustNavTabs;