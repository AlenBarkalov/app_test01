import React, {Component, PureComponent} from "react";

class Article extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            count:  0
        }

        // не работает (( this.handleClick = handleClick.bind(this)
    }/**/

    /*state = {
        isOpen: true
    }*/


    /*shouldComponentUpdate(nextProps, nextState) {
        //console.log('----','shouldComponentUpdate')
        return this.state.isOpen !== nextState.isOpen
    }*/

    // так можно обращаться если state описан через constructor
    // componentWillMount - служит для обновления данных, получения новых данных
    componentWillMount(){
        //console.log('----','mounting')
    }

    // Если пришла новая статья
/*    componentWillReceiveProps(nextProps){
        //console.log('----','componentWillReceiveProps')
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }*/

    componentWillUpdate(){
        console.log('---','будет обновлено')
    }

    //<div className='card-text' style={{color: 'red'}}>
    render(){
        const {article, isOpen, onButtonClick} = this.props
        //console.log('---', this.props);
        const body = isOpen && <section className="card-text">{article.text}</section>
        return(
            <div
                className='card mx-auto'
                style={{width: '50%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button
                            onClick={onButtonClick}
                            className="btn btn-primary btn-lg float-right"
                        >
                        {isOpen ? 'закрыть' : 'открыть'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Создано: {(new Date(article.date)).toDateString()}
                        </h6>
                    {body}

                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick = () => {
        /*console.log('---','нажата кнопка -закрыть-')
        this.setState({
            isOpen: !this.state.isOpen
        })*/
    }

}



/* сделали сначала - stateless
function Article(props) {
    const {article} = props
    console.log('---', props);
    const body = <section>{article.text}</section>
    return(
        <div className='hello' style={{color: 'red'}}>
            <h2>
                {article.title}
                <button onClick={handleClick} >закрыть</button>
                </h2>
            {body}
            <h3>Создано: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
}*/

/*function handleClick() {
    console.log('---','нажата кнопка -закрыть-')
}*/

export default Article