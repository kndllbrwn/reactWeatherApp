var Greeter = React.createClass({
    render: function (){
        return(
            <div>
                <h1>Hello React2</h1>
                <p> Here is a paragraph from a React component!</p>
            </div>
        );
    }
}); 

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);