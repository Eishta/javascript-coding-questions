import React from 'react'
export default (Component, delay) => {

    class CompHOC extends React.Component {
        debounce = (cb, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    cb(...args)
                }, delay);
            };
        };
        debounced = this.debounce(() => this.forceUpdate(), delay);

        shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponent", nextProps.count);
            this.debounced();
            return false;
        }
        
        render() {
            return <Component {...this.props} />;
        }
    }
    return CompHOC
}

