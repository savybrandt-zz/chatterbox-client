
// YOUR CODE HERE:
var app = {};
var friends = [];
var messages = [];

// $(document).ready(function() {
// });

app.server = 'https://api.parse.com/1/classes/messages';


app.send = function(message) {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'GET',
    data: 'order=-createdAt', 
    success: function (data) {

      //console.log('data in success', data);

      for (var i = 0; i < data.results.length; i++) {
        //console.log(messages);
        //console.log(JSON.stringify(data.results[i]));
        if (messages.indexOf(JSON.stringify(data.results[i])) === -1) {
          //console.log(data.results[i]); 
          app.renderMessage(data.results[i]);
        }  
      }

      //console.log('chatterbox: Message received');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to fetch message', data);
    }
  });
};

app.clearMessages = function() {

  messages = [];
  $('#chats').html('');
};

app.renderMessage = function(message) {
  var stringifiedMessage = JSON.stringify(message);
  //message list
  messages.push(stringifiedMessage);  

  var $username = $(message.username);
  var messageNode = $('#chats').prepend('<p>' + '<a href=# class=username' + ' nodename = ' + $username.selector + '>' + $username.selector + '</a>' + ': ' + message.text + '</p>');
  // think about using html handlers
  $('.username').on('click', function() { 
    console.log($(this).attr('nodename'));
    console.log('inside onlick');  
    console.log($(this).attr('nodeName'));
    app.handleUsernameClick($(this).attr('nodename'));
  });
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');        
};


app.init = function() {
  // should populate our timeline with messages from server
  app.fetch();
  setTimeout(function() {
    app.init();
  }, 1000);
};

app.init();

app.handleUsernameClick = function(username) {
  //this needs to run once a usernmae is clicked
  if (friends.indexOf(username) === -1) {
    friends.push(username);   
  }
  console.log(friends);
};

  
app.handleSubmit = function(text) {
  var message = {
    username: getUsername(),
    text: text,
    //roomname: '4chan'
  };
  console.log('inside handleSubmit');
  app.send(message);  
};


$(document).ready(function () { 
  $( '.submit' ).on('submit', function( event ) {
    event.preventDefault();
    var message = document.getElementById('messageText').value;
    app.handleSubmit(message);
    console.log(message);
    //console.log('inside submit click');
  });
});  

// check if new messages are on server
//use fetch to access messages on server
  //fetch access all messages -
  //use setTimeout to run fetch periodically

  //we're not getting new messages from server.
  //how access new messages?
  
  //we want to prescreen data from server before we fetch/pull it.  
    //goal: only pull new data
    //possibly use datafilter a-la:
// jQuery.ajaxSetup({
//   dataFilter: function(data) {
//     var data = JSON.parse(data);
//     //fetch message only if message is newer than our most recent chached message. 
//       //if message is older than our most rcent message delete message
//     if (data.results[i].createdAt < messages[0].createdAt) {
//     delete data.redirect;
//     return JSON.stringify(data);
//   }
// });

  // each message has a created at property
// if so post them to chat wall



//problem we:re not getting all data fro mserver
 // either server limited to sending 100 messages and is sending first 100 messages. 
 // or we're only requesting/receiveing 100 messages
   // seems tio only give us 100 messages because we have no evidence of client-side changing server to give us 100 messages.

 // or we're not requesting new messages  

 // DELETE

 // We are communicating with the server.
   //The server is giving us the first 100 messages.
   // We need to be communicating with server to get correct messages. 


//posting messages
 //bar and submit message
 //


var getUsername = function() {
  var url = JSON.stringify(window.location.href);
  url = url.split('=').slice(1).join(' ').split('');
  url.splice(url.length - 2, 2);
  url = url.join('');
  console.log(url);
  return url;
};







