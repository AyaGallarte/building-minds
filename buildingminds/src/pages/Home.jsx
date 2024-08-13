import { Button, CardGroup, Card, Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Categories from '../components/Categories';
import logo from '../images/logo.png'; 
import learn2 from '../images/learn2.jpeg';
import learn13 from '../images/learn13.jpg'; 
import learn6 from '../images/learn6.jpg';
import learn15 from '../images/learn15.jpg';
import learn9 from '../images/learn9.jpg';
import learn11 from '../images/learn11.webp';


const cardData = [
  {
    id: 1,
    imgSrc: learn6,
    title: "English",
    description: "Grade 6 English"
  },
  {
    id: 2,
    imgSrc: learn15, 
    title: "Math",
    description: "Grade 5 Math"
  },
  {
    id: 3,
    imgSrc: learn9, 
    title: "Science",
    description: "Grade 7 Science"
  },
  {
    id: 4,
    imgSrc: learn11, 
    title: "Arts",
    description: "Grade 1 Arts"
  }
];

export default function Home() {
    return (
        <>
        <section>
            <Navbar expand="lg" className="navbar">
                <Container className="container-navbar">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#categories">CATEGORIES</Nav.Link>
                            <Nav.Link href="#featured-section">FEATURED</Nav.Link>
                            <Nav.Link href="#resources">RESOURCES</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>                   
                        </Nav>                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

        <section id="home">
            <div className="page-container">
                <div className="content-wrapper">
                    <div id="introduction">
                        <Row>
                            <Col lg={4} xs={12} className="intro-caption order-xs-1 order-lg-1">
                                <h1>Bridging gaps in children's understanding to accelerate their learning and development.</h1>
                            </Col>
                            <Col lg={8} xs={12} className="order-xs-2 order-lg-2">
                                <img src={learn13} className="d-block img-fluid" alt="Introduction Image" />
                            </Col>
                        </Row>
                    </div>

                    <h1 className="featured-caption" id="featured-section">Featured Section</h1>
                    <div id="featured" className="container-cards">
                        <Row className="g-4">
                          {cardData.map((card) => (
                            <Col key={card.id} lg={3} xs={12}>
                              <Card className="card h-100">
                                <Card.Img 
                                  variant="top" 
                                  src={card.imgSrc} 
                                  className="product-image" 
                                  alt={card.title} 
                                />
                                <Card.Body className="cardBody">
                                  <Card.Title className="custom-card-title">{card.title}</Card.Title>
                                  <Card.Text className="custom-card-description">{card.description}</Card.Text>
                                  <Card.Text className="custom-card-price">{card.price}</Card.Text>
                                  <Button className="btn" variant="primary" size="sm">Details</Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>

        <section id="categories-section">
            <div id="categories">
                <h1 className="categories-caption">Categories</h1>
                <Categories />
            </div>
        </section>

        <section id="resources">
            <div>
                <h1 className="resources-caption">Resources</h1>
                <Row className="gx-4 gy-4">
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/_BQMwMbxiVo" 
                            title="Grade 1 : Practice Reading English" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/Ds226Vh7epg" 
                            title="Grade 2 Math: Subtraction Rocks with Base Ten Blocks" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/W3jc0JHwZlQ" 
                            title="Grade 3: A Computer System" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/tqY-_wAH4Wg" 
                            title="Grade 4 : Arts & Crafts" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/p4uakvlPugY" 
                            title="Grade 5: Parts of Speech" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="resources-videos">
                        <iframe 
                            width="100%" 
                            height="200" 
                            src="https://www.youtube.com/embed/VETnTb7MX6A" 
                            title="Music 6 - The Staff, Pitch Names, and So-Fa Syllables" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
            </div>
        </section>

        <section id="about">
            <h1>About Us</h1>
            <h5 id="mission">Our Mission</h5>
                <p>The mission of Building Minds is to be a dynamic provider of quality educational products and services.
                    We strive to meet the specific needs of the marketplace in a unique and progressive manner,
                   and are committed to excellence and employee growth and development.</p>
            <h5 id="contact">Contact Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        </section>        
        </>
    );
}

