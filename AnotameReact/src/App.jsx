import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustNavTabs from './app-modules/customized-elements/CustCards/CustNavCard/CustNavCard';
import CustLogoCard from './app-modules/customized-elements/CustCards/CustLogoCard/CustLogoCard';
import { Col, Container, Row } from 'react-bootstrap';
import CustH1 from './app-modules/customized-elements/CustH1a/CustH1';

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-4"> {/* mb-4 adds margin-bottom */}
            <CustLogoCard />
          </Col>
          <Col xs={12} md={12}>
            <CustNavTabs>
              <CustH1>CREAR NOTA</CustH1>
            </CustNavTabs>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
