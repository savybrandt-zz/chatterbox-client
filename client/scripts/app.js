// YOUR CODE HERE:
var app = {};
var friends = [];

app.init = function() {

};

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
    url: undefined,
    type: 'GET',
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

app.clearMessages = function() {

  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: undefined,
  //   type: 'DELETE',
  //   data: $('#chats'),
  //   contentType: 'application/json',
  //   success: function (data) {
  //     console.log('chatterbox: Message sent');
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('chatterbox: Failed to send message', data);
  //   }
  // });

  $('#chats').html('');
};

app.renderMessage = function(message) {
  //create message node from message object
  // var message = {
  //   username: 'Mel Brooks',
  //   text: 'Never underestimate the power of the Schwartz!',
  //   roomname: 'lobby'
  // } ;
  
  var messageNode = $('#chats').append('<p>' + message.username + ': ' + message.text + '</p>');
  $(messageNode).addClass(message.username);

};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');        
};



//makeusername clickable
  //add a friend upon clicking



















