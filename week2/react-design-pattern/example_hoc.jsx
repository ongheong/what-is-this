class CommentList extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); // bind the method to the instance
        this.state = { 
            comments: DataSource.getComments() // "DataSource" 는 전역 데이터 소스
        };
    }

    componentDidMount() { // 변화 감지를 위한 리스너 등록
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() { // 리스너 해제
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() { // 데이터 소스 변경 시 comments 업데이트
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() { // comments 를 렌더링
        return (
            <div>
                {this.state.comments.map((comments) => (
                    <Comment comment={comment} key={comment.id} /> 
                ))}
            </div>
        );
    }
}

class BlogPost extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        blogPost: DataSource.getBlogPost(props.id)
      };
    }
  
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      this.setState({
        blogPost: DataSource.getBlogPost(this.props.id)
      });
    }
  
    render() {
      return <TextBlock text={this.state.blogPost} />;
    }
  }

//컴포넌트와 데이터 선택 함수를 받아서 새로운 컴포넌트를 반환
function withSubscription(WrappedComponent, selectData) { 
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() { // WrappedComponent 를 렌더링하고 props 를 전달
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}

// HOC 를 사용하여 새로운 컴포넌트 생성
const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
  );
  
  const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
  );