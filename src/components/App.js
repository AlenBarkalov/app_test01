import React, {PureComponent} from 'react';
//import Article from './Article'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

//<!-- <Article article={articles[0]} foo="bar" flag={true} /> -->
//function App() {
class App extends PureComponent {
    state = {
        reverted: false
    }

    articles = articles.slice()
    render(){
        console.log('---',1)
        //const articleList = this.state.reverted ? articles.reverse() : articles
        //console.log('---',
        //    2,
        //    this.state,
        //    articles.map(article => article.id))
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                    <button
                        className="btn"
                        onClick={this.revert}>
                        Сортировка
                    </button>
                </div>
                <ArticleList
                    articles = {this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => {
        console.log('---',2)
        this.articles.reverse()
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App