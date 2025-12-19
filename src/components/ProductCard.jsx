import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Name from './Name.jsx';
import Price from './Price.jsx';
import Description from './Description.jsx';
import Image from './Image.jsx';

function ProductCard({ firstName }) {
    const greeting = firstName ? `Hello, ${firstName}!` : 'Hello, there!';

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <Card.Body className="p-0">
                            <div style={{ background: '#fff', borderRadius: '12px 12px 0 0', padding: '20px', textAlign: 'center' }}>
                                <Image />
                            </div>
                            <div style={{ padding: '30px', color: '#fff' }}>
                                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                                    <Name />
                                </div>
                                <div style={{ marginBottom: '15px', textAlign: 'center', fontSize: '1.2rem', fontWeight: '500' }}>
                                    <Price />
                                </div>
                                <div style={{ marginBottom: '25px', textAlign: 'center', fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.95' }}>
                                    <Description />
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '2px solid rgba(255,255,255,0.2)' }}>
                                    <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                                        {greeting}
                                    </h5>
                                    {firstName && (
                                        <div style={{ marginTop: '15px' }}>
                                            <img
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
                                                alt="Welcome"
                                                style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <Button variant="light" className="w-100 mt-4" size="lg">
                                    <strong>Explore Product</strong>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductCard;