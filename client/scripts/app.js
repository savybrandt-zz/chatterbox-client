
// YOUR CODE HERE:
var app = {};
var friends = [];


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
 
  var $username = $(message.username);
  var messageNode = $('#chats').append('<p>' + '<a href=# class=username' +  ' nodename = ' + $username.selector + '>' + $username.selector + '</a>' + ': ' + message.text + '</p>');

};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + roomName + '</div>');        
};


app.init = function() {

  $(document).ready(function() {

    $('.username').on('click', function() { 
      console.log($(this).attr('nodename'));  
      //console.log($(this).attr('nodeName'));
      //friends.push($(this.attr('nodeName'));
      app.handleUsernameClick($(this).attr('nodename'));

    });

  });
};

app.handleUsernameClick = function(username) {
  //this needs to run once a usernmae is clicked
  if (friends.indexOf(username) === -1) {
    friends.push(username);   
  }
  console.log(friends);
};
















