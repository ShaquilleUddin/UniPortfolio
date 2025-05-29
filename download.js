// Helper function to download files
function downloadFiles(filePaths) {
    filePaths.forEach((filePath) => {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filePath.split('/').pop(); // Extract the file name from the path
      link.click();
    });
  }
  
  // Introduction to Programming
  document.getElementById('introtoprogrammingButton').addEventListener('click', function () {
    if (confirm('Do you want to download Game-Project.zip?')) {
      downloadFiles(['./Downloads/Game-Project.zip']);
    }
  });
  
  // Java for Industry
  document.getElementById('javaIndustryButton').addEventListener('click', function () {
    if (confirm('Do you want to download all Java for Industry files?')) {
      downloadFiles([
        './Downloads/JavaIndustry.zip',
        './Downloads/JavaIndustry2.zip',
        './Downloads/JavaIndustry3.zip',
        './Downloads/JavaIndustryWC.zip',
      ]);
    }
  });
  
  // Extended Java
  document.getElementById('extendedJavaButton').addEventListener('click', function () {
    if (confirm('Do you want to download all Extended Java files?')) {
      downloadFiles([
        './Downloads/ExtendedJava1.zip',
        './Downloads/ExtendedJava2.zip',
        './Downloads/ExtendedJava3.zip',
      ]);
    }
  });
  
  // Algorithm 1
  document.getElementById('algorithm1Button').addEventListener('click', function () {
    if (confirm('Do you want to download SortingAlgorithmsImplementationCoursework.java?')) {
      downloadFiles(['./Downloads/SortingAlgorithmsImplementationCoursework.java']);
    }
  });
  
  // Problem Solving for Computer Science
  document.getElementById('psfcsButton').addEventListener('click', function () {
    if (confirm('Do you want to download all Problem Solving for Computer Science files?')) {
      downloadFiles([
        './Downloads/PSFCS-Primes.js',
        './Downloads/PSFCS-Sudoku.js',
      ]);
    }
  });
  
  // Computing Project 1
  document.getElementById('computingProject1Button').addEventListener('click', function () {
    if (confirm('Do you want to download all Computing Project 1 files?')) {
      downloadFiles([
        './Downloads/DrawingAppProject.zip',
        './Downloads/DrawingAppReport.pdf',
      ]);
    }
  });
  
  // Computing Project 2
  document.getElementById('computingProject2Button').addEventListener('click', function () {
    if (confirm('Do you want to download all Computing Project 2 files?')) {
      downloadFiles([
        './Downloads/RoomBooking.zip',
        './Downloads/RoomBookingInstallGuide.pdf',
      ]);
    }
  });
  
  // Graphics
  document.getElementById('graphicsButton').addEventListener('click', function () {
    if (confirm('Do you want to download all Graphics files?')) {
      downloadFiles([
        './Downloads/GraphicsColours.zip',
        './Downloads/GraphicsDigitalImages.zip',
        './Downloads/GraphicsAnimations.zip',
      ]);
    }
  });
  
  // Front End Web (open link in a new tab)
  document.getElementById('frontEndWebButton').addEventListener('click', function () {
    window.open(
      'https://doc.gold.ac.uk/~suddi006/Portfolio/Personal%20Portfolio/Shaquille\'sPortfolio-Home.html',
      '_blank'
    );
  });
  
  // Dynamic Web
  document.getElementById('dynamicWebButton').addEventListener('click', function () {
    if (confirm('Do you want to download ShaqForum.zip?')) {
      downloadFiles(['./Downloads/ShaqForum.zip']);
    }
  });
  
  // Databases and The Web (open multiple links in new tabs)
  document.getElementById('databasesButton').addEventListener('click', function () {
    if (confirm('Do you want to open all Databases and The Web resources?')) {
      const links = [
        'https://www.doc.gold.ac.uk/usr/159/',
        'https://www.doc.gold.ac.uk/usr/159/api/games',
        'https://github.com/ShaquilleUddin/shaqsgamestore',
      ];
      links.forEach((url) => {
        window.open(url, '_blank');
      });
    }

  // Final Project in Computer Science
  document.getElementById('finalProjectButton').addEventListener('click', function () {
    if (confirm('Do you want to download all Final Project in Computer Science files?')) {
      downloadFiles([
        './Downloads/CalculockedFinalReport.pdf',
      ]);
    }
  });
});