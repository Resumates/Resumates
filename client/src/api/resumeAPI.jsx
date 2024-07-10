// // delete 버튼
// const handleDelete = async () => {
//   try {
//     if (!resume || !resume._id) {
//       return console.error('삭제할 이력서를 찾을 수 없습니다');
//     }

//     const response = await axios.delete(`http://localhost:5000/user/resume/${resume._id}`);
//     console.log('Delete response:', response.data);
//     setResume(null); // 이력서 삭제 후 상태 초기화
//   } catch (error) {
//     console.error('Error deleting resume:', error);
//   }
// };

// //edit 버튼

// console.log(resume);
