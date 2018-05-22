class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisisbility = this.handleToggleVisisbility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisisbility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisisbility}>
                  {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                { this.state.visibility && 
                    <div>
                        <p>Here are some details</p>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let isVisible = false;

// const toggleVisibility = () => {
//     isVisible = !isVisible;
//     render();
// };

// const render = () => {
//     const template =  (
//         <div>
//         <h1>Visibility Toggle</h1>

//         <button id="theButton" onClick={toggleVisibility}>{isVisible ? 'Hide details' : 'Show details'}</button>
//         {
//             isVisible && <p>Here are some details</p>
//         }
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();