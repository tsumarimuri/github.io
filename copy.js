
function copyToClipboard2() {
    var codeBlock = document.getElementById('codeBlock-2');
    var textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var copyButton = document.querySelector('button.copy-2');
    copyButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>&thinsp;<span style="color:white;">copied</span>';
    setTimeout(function() {
      copyButton.innerHTML = '<i class="fa-solid fa-copy" style="color: #ffffff;"></i>';
    }, 2000); 
  }
  function copyToClipboard1() {
    var codeBlock = document.getElementById('codeBlock-1');
    var textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var copyButton = document.querySelector('button.copy-1');
    copyButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>&thinsp;<span style="color:white;">copied</span>';
    setTimeout(function() {
      copyButton.innerHTML = '<i class="fa-solid fa-copy" style="color: #ffffff;"></i>';
    }, 2000); 
  }
  function copyToClipboard3() {
    var codeBlock = document.getElementById('codeBlock-3');
    var textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var copyButton = document.querySelector('button.copy-3');
    copyButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>&thinsp;<span style="color:white;">copied</span>';
    setTimeout(function() {
      copyButton.innerHTML = '<i class="fa-solid fa-copy" style="color: #ffffff;"></i>';
    }, 2000); 
  }
  function copyToClipboard4() {
    var codeBlock = document.getElementById('codeBlock-4');
    var textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var copyButton = document.querySelector('button.copy-4');
    copyButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>&thinsp;<span style="color:white;">copied</span>';
    setTimeout(function() {
      copyButton.innerHTML = '<i class="fa-solid fa-copy" style="color: #ffffff;"></i>';
    }, 2000); 
  }
  function copyToClipboard5() {
    var codeBlock = document.getElementById('codeBlock-5');
    var textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var copyButton = document.querySelector('button.copy-5');
    copyButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>&thinsp;<span style="color:white;">copied</span>';
    setTimeout(function() {
      copyButton.innerHTML = '<i class="fa-solid fa-copy" style="color: #ffffff;"></i>';
    }, 2000); 
  }


