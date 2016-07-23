const { combineReducers, createStore } = Redux;
const { Provider, connect } = ReactRedux;
const { Component } = React;
const { render } = ReactDOM;

var inito = Immutable.fromJS({
    token: "123"
});

function bigRe(state = inito, action) {
    switch (action.type) {
        case "updateToken":
            return state.set('token', action.token);
        default:
        return state;
    }
}

var App =({dispatch, token}) => {
        var iframe = <div></div>
        if (token!="123")
            iframe =
                <iframe src={"//localhost:9000/graphql?access_token="+ token} width={1000} height={600}></iframe>;
        return (
            <div>
                {iframe}
            </div>
        );
    }

window.store = createStore(combineReducers({ common: bigRe }), window.devToolsExtension && window.devToolsExtension());

App = connect(a => {
    return {...(a.common.toJS())};
})(App);

store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('stage')
);


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:9000/auth/local",
    "method": "POST",
    "headers": {
        "cache-control": "no-cache",
        //"postman-token": "cc771975-7f11-1947-485c-724aaf749a3c",
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "email": "admin@example.com",
        "password": "admin"
        //"email": "test@example.com",
        //"password": "test"
    }
}


$.ajax(settings).done(function (response) {
    var token = response.token;
    window.store.dispatch({ type: 'updateToken', token });
});