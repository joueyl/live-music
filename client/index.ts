import { Mediasoup } from './mediasoup';
const med = new Mediasoup({
  room: {
    name: '大厅',
    _id: '66ea920ba9d73f08a839059e',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEwNTI1MDgxMzhAcXEuY29tIiwiaWF0IjoxNzI2ODAxNzY5LCJleHAiOjE3MjkzOTM3Njl9.V6Zt6-30_U6CFds2FQinF-41YSMm_Qhik3dw3MWjN_w',
  },
});
med.on('Finish',()=>{
  console.log('所有连接完成'); 
})

