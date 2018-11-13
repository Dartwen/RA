'use strict';

function MessageHistory({list}) {
    const messageHistory = list.map(message => {
        if (message.type === 'response') {
            return <Response from={message.from} message={message} />
        }
        if (message.type === 'message'){
            return <Message from={message.from} message={message} />
        }
        if (message.type === 'typing'){
            return <Typing from={message.from} message={message} />
        }
    });

    return (<ul>{messageHistory}</ul>)

}

MessageHistory.defaultProps = {list: []};