function a()
{
     var link;
     link = document.createElement('a');
     link.href='Resume Bilal.pdf';
     link.download = 'Resume Bilal.pdf';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
} 
