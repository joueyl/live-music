(function (socket_ioClient) {
	'use strict';

	socket_ioClient.io('ws://localhost:3000/', { auth: { room: {token:'456789'}  } });   
	// const Socket = createIoPromise();
	// Socket({ type: 'connect' }).then((res) => {
	//   console.log(res);
	// });

})(socket_ioClient);
