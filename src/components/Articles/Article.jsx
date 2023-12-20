import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import Votes from './Votes';
import ErrorPage from '../ErrorPage';
import { getArticleById } from '../../utils';
import { Row, Col, Badge, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Articles/Articles.css';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArticle: false,
      verifyArticle: 'article',
      article: {},
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchArticle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.article_id !== this.props.match.params.article_id) {
      this.fetchArticle();
    }
  }

  fetchArticle = async () => {
    const { article_id } = this.props.match.params;
    this.setState({ error: null, isLoading: true });

    try {
      const articleFromApi = await getArticleById(article_id);
      this.setState({ article: articleFromApi });

      if (articleFromApi !== null) {
        this.setState({ isLoading: false });
      }
    } catch (err) {
      this.setState({
        error: err,
        isLoading: false,
        isArticle: false,
      });
    }
  };

  render() {
    const { isArticle, verifyArticle, article, isLoading, error } = this.state;

    if (error) {
      return <ErrorPage status={error.response.status} />;
    }

    return (
      <main>
        {isLoading ? (
          <p className='loading-message'>
            <i>Making up the news...</i>
          </p>
        ) : (
          <Card>
            <div className='img-container'>
              <Card.Img
                className='img-fluid'
                variant='top'
                src={`${article.article_img_url}`}
                alt={article.author}
              />
            </div>
            <Card.Title className='ind-card'>
              {article.title} bg="light"
            </Card.Title>
            <Card.Subtitle>
              <Row>
                <Col>
                  <Badge bg='dark'>{article.topic}</Badge>
                </Col>
              </Row>
            </Card.Subtitle>
            <Card.Body>
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
            <Row className='votes-container'>
              <Col></Col>
              <Col>
                <Votes
                  id={this.props.match.params.article_id}
                  votes={article.votes}
                  location={isArticle}
                  setLocation={(value) => this.setState({ isArticle: value })}
                  verify={verifyArticle}
                />
              </Col>
            </Row>
            <Container>
              <Comments article_id={this.props.match.params.article_id} />
            </Container>
          </Card>
        )}
      </main>
    );
  }
}

export default Article;
