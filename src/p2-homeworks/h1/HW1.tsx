import React from 'react'
import Message, {MessageProsType} from "./Message";
import AlternativeMessage, {AltDataType} from "./AlternativeMessage";

const messageData: MessageProsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const altMessageData1: AltDataType = {
    avatar: 'https://placeimg.com/70/70/people',
    name: 'John Wick',
    lastSeen: 15,
    comment: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
    likeCount: 47,
    shareCount: 11
}
const altMessageData2: AltDataType = {
    avatar: 'https://placeimg.com/70/70/animals',
    name: 'David Backham',
    lastSeen: 7,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis fuga iure molestiae nam neque nulla omnis sed, sint vitae! Alias amet delectus veniam! Aliquam consequatur dignissimos eius nulla sint.',
    likeCount: 201,
    shareCount: 42
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <AlternativeMessage data={altMessageData1}/>
            <AlternativeMessage data={altMessageData2}/>

            <hr/>
        </div>
    )
}

export default HW1
