var Greeter = React.createClass({
        getDefaultProps: function () {
            return {
                name: 'React',
                message: 'Text from React.'
            };
        },
    render: function (){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>{message  + '!!'}</p>
            </div>
        );
    }
}); 

var firstName = 'Ken';
var message = 'This is a paragraph from a React component!'
ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);