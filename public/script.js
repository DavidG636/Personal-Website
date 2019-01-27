$(function() {

  $('.gitPicWatchLater').click(function() {
    window.open('https://github.com/DavidG636/Youtube-Watch-Later-Player', '_blank');
  });

  $('.webPicWatchLater').click(function() {
    window.open('https://davidg636.github.io/Youtube-Watch-Later-Player/', '_blank');
  });

  $('.gitPicCase').click(function() {
    window.open('https://github.com/DavidG636/Case', '_blank');
  });

  $('.webPicCase').click(function() {
    window.open('https://davidg636.github.io/Case/', '_blank');
  });

  $('.gitPicParagraphUtilities').click(function() {
    window.open('https://github.com/DavidG636/Paragraph-Utilities', '_blank');
  });

  $('.webPicParagraphUtilities').click(function() {
    window.open('https://davidg636.github.io/Paragraph-Utilities/', '_blank');
  });
  $('.gitPicLowercase').click(function() {
    window.open('https://github.com/DavidG636/Lowercase', '_blank');
  });

  $('.webPicLowercase').click(function() {
    window.open('https://davidg636.github.io/Lowercase/', '_blank');
  });

  $('.gitPicLeapYear').click(function() {
    window.open('https://github.com/DavidG636/leapYear', '_blank');
  });

  $('.webPicLeapYear').click(function() {
    window.open('https://davidg636.github.io/leapYear/', '_blank');
  });

  $('.gitPicHelloName').click(function() {
    window.open('https://github.com/DavidG636/helloName', '_blank');
  });

  $('.filePicHelloName').click(function() {
    window.open('https://github.com/DavidG636/helloName/blob/master/helloName.c', '_blank');
  });

  $('.gitPicPrimalityChecker').click(function() {
    window.open('https://github.com/DavidG636/Primality-Checker', '_blank');
  });

  $('.webPicPrimalityChecker').click(function() {
    window.open('https://davidg636.github.io/Primality-Checker/', '_blank');
  });

  $('.profilePic').click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.profileName').click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.gitPicPaceSeidenbergStemCamp2017').click(function() {
    window.open('https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017', '_blank');
  });

  $('.filePicPaceSeidenbergStemCamp2017').click(function() {
    window.open('https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017/blob/master/script.py', '_blank');
  });

  class Typewriter {
    constructor(element, words, wait = 3000) {
      this.element = element;
      this.words = words;
      this.text = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {

      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        this.text = fullTxt.substring(0, this.text.length - 1);
      } else {
        this.text = fullTxt.substring(0, this.text.length + 1);
      }

      this.element.html(`<span class="txt">${this.text}</span>`);
      let speed = 300;

      if (this.isDeleting) {
        speed /= 2;
      }

      if (!this.isDeleting && this.text === fullTxt) {
        speed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.wordIndex++;
        speed = 500;
      }

      setTimeout(() => {this.type()}, speed);
    }
  }

  const element = $('.typewriter');
  const words = JSON.parse($(element).attr('data-words'));
  const wait = $(element).attr('data-wait');
  var creator = new Typewriter(element, words, wait);
});
