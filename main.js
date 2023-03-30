var socket = io("http://192.168.1.198:3000");
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

console.log(socket);

//
var chatInput = document.getElementById("messages");
var chatContent = document.getElementById("chat-content");
chatInput.addEventListener('keydown', function(event) {
    if(event.which === 13 || event.keyCode === 13) {
        var message = chatInput.value;
        chatInput.value = '';
        socket.emit('gui-tin-nhan', {
            from: 'kiet',
            message: message
        });
    }
});
socket.on('nhan-tin-nhan', function(data){
    console.log(data);
    if (data.from === 'kiet') {
    chatContent.innerHTML +=   '<div class="chat-user chat-right">' +
                                        '<div class="avatar-bg-chat">K</div>' +
                                        '<div class="chat-content-right">' +
                                            '<p>'+data.message+'</p>' +
                                        '</div>' +
                                '</div>';
    }else {
        chatContent.innerHTML += '<div class="chat-user">' +
                                    '<div class="avatar-bg-chat">K</div>' +
                                    '<div class="chat-content-left">' +
                                        '<p>'+data.message+'</p>' +
                                    '</div>' +
                                '</div>';
    }
});