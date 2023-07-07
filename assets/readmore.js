function addReadMore() {
    var collectionDescription = document.querySelector('.collection-description');
    var content = collectionDescription.innerHTML;
    var cutoff = 250;
  
    if (content.length > cutoff) {
      var beforeReadMore = content.substring(0, cutoff);
      var afterReadMore = content.substring(cutoff);
  
      // Create a new element and set its innerHTML to beforeReadMore
      var div = document.createElement('div');
      div.innerHTML = beforeReadMore;
      // Extract the textContent, which will strip HTML tags
      beforeReadMore = div.textContent;
  
      var dots = document.createElement('span');
      dots.id = 'dots';
      dots.textContent = '...';
  
      var remainingContent = document.createElement('span');
      remainingContent.id = 'more';
      remainingContent.style.display = 'none';
      remainingContent.innerHTML = afterReadMore;
  
      var readMoreLink = document.createElement('a');
      readMoreLink.id = 'myBtn';
      readMoreLink.href = '#';
      readMoreLink.textContent = 'Read more';
      readMoreLink.onclick = toggleReadMore;
  
      collectionDescription.innerHTML = '';
      collectionDescription.appendChild(document.createTextNode(beforeReadMore));
      collectionDescription.appendChild(dots);
      collectionDescription.appendChild(remainingContent);
      collectionDescription.appendChild(readMoreLink);
    }
  }
  
  
  function toggleReadMore(event) {
    event.preventDefault();
    var dots = document.querySelector('#dots');
    var remainingContent = document.querySelector('#more');
    var btnText = document.querySelector('#myBtn');
  
    if (remainingContent.style.display === 'none') {
      dots.style.display = 'none';
      btnText.textContent = 'Read less';
      remainingContent.style.display = 'inline';
    } else {
      dots.style.display = 'inline';
      btnText.textContent = 'Read more';
      remainingContent.style.display = 'none';
    }
  }
  
  document.addEventListener('DOMContentLoaded', addReadMore);
