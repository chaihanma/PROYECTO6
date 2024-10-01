// Toggle Like
function toggleLike(button) {
    const likesCount = button.closest('.photo-card').querySelector('.likes-count');
    const currentLikes = parseInt(likesCount.textContent.split(' ')[0]);
  
    // Cambiar la clase del botón para reflejar el estado "liked"
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      likesCount.textContent = `${currentLikes - 1} Me gusta`;
    } else {
      button.classList.add('liked');
      likesCount.textContent = `${currentLikes + 1} Me gusta`;
    }
  }
  
  // Añadir comentario
  function addComment(button) {
    const input = button.previousElementSibling;
    const commentText = input.value.trim();
    const commentList = button.closest('.photo-card').querySelector('.comment-list');
  
    if (commentText !== '') {
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      input.value = ''; // Limpiar campo de entrada
    }
  }
  