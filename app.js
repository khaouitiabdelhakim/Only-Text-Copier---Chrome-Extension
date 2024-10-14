document.addEventListener('copy', function (e) {
    e.preventDefault();
  
    const selection = window.getSelection();
    const plainText = selection.toString();
  
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', plainText);
    }
  
    if (document.execCommand) {
      document.execCommand('copy');
    }
  });
  