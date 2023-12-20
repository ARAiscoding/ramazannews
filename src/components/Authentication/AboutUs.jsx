// AboutUs.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Adjust the imports based on your setup
import '../Authentication/styles/AboutUs.css';

function AboutUs() {
  return (
    <Container className='about-us'>
      <Row>
        <Col md={8} className='about-content'>
          <h2>About News</h2>
          <p>
            Welcome to News, your go-to destination for staying
            informed, engaged, and connected to the world. At News,
            we believe in the power of information to transform lives and empower
            individuals. Our mission is to provide you with a seamless and personalized
            news experience, allowing you to explore and discover the stories that
            matter most to you.
          </p>

          <h3>Why News?</h3>
          <ul>
            <li>
              <strong>Unparalleled Coverage:</strong> With our extensive database, we
              cover a diverse range of topics, ensuring that you have access to news
              articles about everything from global events to niche interests.
            </li>
            <li>
              <strong>Intelligent Search:</strong> Our advanced search feature empowers
              you to find news articles with precision. Whether you're interested in the
              latest tech trends, world affairs, or lifestyle updates, [Your News App
              Name] delivers relevant and up-to-date content at your fingertips.
            </li>
            <li>
              <strong>Personalized Curation:</strong> Tailor your news feed to reflect
              your interests. Our smart algorithms learn from your reading habits,
              providing you with a curated selection of articles that align with your
              preferences.
            </li>
          </ul>

          <h3>Our Commitment to Quality</h3>
          <p>
            At News, we prioritize accuracy, credibility, and diversity
            in the content we deliver. Our team of experienced journalists and content
            curators work tirelessly to bring you reliable and unbiased information. We
            understand the importance of staying informed in today's fast-paced world,
            and we strive to be your trusted source for news.
          </p>

          <h3>Stay Connected, Stay Informed</h3>
          <p>
            Join the News community and embark on a journey of
            discovery. Whether you're a news enthusiast, a casual reader, or someone
            seeking in-depth analysis, we have something for everyone. Download News br
            today and experience the future of news consumption.
          </p>

          <p className='thank-you'>
            Thank you for choosing News – where curiosity meets
            information.
          </p>
        </Col>

        {/* Optionally, you can add a button or other elements in the sidebar */}
        <Col md={4} className='sidebar'>
          <Button variant='primary' size='lg' block>
            Download Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
