function addReadMore() {
    var readMoreElements = document.querySelectorAll('.collection-description');
  
    readMoreElements.forEach(function(element) {
      var paragraphs = element.getElementsByTagName('p');
  
      if (paragraphs.length > 1) {
        var firstParagraph = paragraphs[0];
        var remainingContent = document.createElement('div');
  
        for (var i = 0; i < paragraphs.length; i++) {
          if (i > 0) {
            remainingContent.appendChild(paragraphs[i]);
          }
        }
  
        element.innerHTML = '';
        element.appendChild(firstParagraph);
        element.appendChild(remainingContent);
  
        remainingContent.style.display = 'none';
  
        var btnText = document.createElement('a');
        btnText.id = 'myBtn';
        btnText.innerHTML = 'Read more';
        btnText.href = '#';
  
        element.appendChild(btnText);
  
        var toggleContent = function() {
          if (remainingContent.style.display === 'none') {
            remainingContent.style.display = 'block';
            btnText.innerHTML = 'Read less';
          } else {
            remainingContent.style.display = 'none';
            btnText.innerHTML = 'Read more';
          }
        };
  
        btnText.addEventListener('click', toggleContent);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', addReadMore);