/* 
Не трогай этот файл, тут логика сайта, 
я сделал конфиг что бы ты мог менять данные

*/

const awesomeEffect = dict => {
  let container = dict.el;
  let randomChars = "";
  let text = dict.text;
  let possible = dict.possible
    ? dict.possible
    : 'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
  let delay = dict.delay ? dict.delay : 70;

  const generateRandomTitle = (i, randomChars) => {
    setTimeout(_ => {
      container.innerText = randomChars;
    }, i * delay);
  };

  for (let i = 0; i < text.length + 1; i++) {
    randomChars = text.substr(0, i);
    for (let j = i; j < text.length; j++) {
      randomChars += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    generateRandomTitle(i, randomChars);
    randomChars = "";
  }
};


window.addEventListener('load', init);


function init() {
    document.querySelector('.preloader > div').style.borderTopColor = config.preloaderColor;
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('loaded');
    }, config.preloaderDelay * 1000);
    let app = new Vue({
      el: '#asif-page',
    
      data: {
        title: config.title,
        titleVisible: false,
        copyrightText: config.copyrightText,
        social: config.social,
        isPlaying: false,
        titleColor: config.titleColor,
        titleShadowColor: config.titleShadowColor,
        copyrightTextColor: config.copyrightTextColor,
        socialColor: config.socialColor,
        socialShadowColor: config.socialShadowColor,
        playButtonColor: config.playButtonColor,
        playButtonShadowColor: config.playButtonShadowColor,
        preloaderColor: config.preloaderColor,
    
        SOCIAL: {
          telegram(data) {
            let username = data.trim();
            username = username.replace('@', '');
            return `https://t.me/${username}`;
          },
    
          steam(data) {
            let username = data.trim();
            return `https://steamcommunity.com/id/${username}`;
          },
		  
		   fastcup(data) {
            let username = data.trim();
            return `https://cs.fastcup.net/${username}`;
          },
    
          vk(data) {
            let username = data.trim();
            return `https://vk.com/${username}`;
          }
        }
      },
    
      methods: {
        stopPlay() {
          this.isPlaying = false;
          this.titleVisible = false;
        },
    
        startPlay() {
          let video = this.$refs['background-video'];
          let title = this.$refs['title'];
    
          this.$refs['background-video'].play();
          this.$refs['background-video'].muted = false;
          this.isPlaying = true;
    
          setTimeout(() => {
            this.titleVisible = true;
    
            awesomeEffect({
              el: title,
              text: this.title,
            });
    
            setInterval(() => {
              awesomeEffect({
                el: title,
                text: this.title,
              })
            }, 1050);

            setInterval(() => {
              awesomeEffect({
                el: document.querySelector('.asif-page-copyright'),
                text: this.copyrightText,
              })
            }, 2000)
          }, config.showDelay * 1000);
        },
    
        getSocialLink(type, username) {
          return this.SOCIAL[type](username);
        }
      },
    
      mounted() {
        let video = this.$refs['background-video'];
    
        video.addEventListener('canplay', e => {
          
        })
    
        video.addEventListener('ended', e => {
          this.stopPlay();
        })
      },

      computed: {
        TitleStyle() {
          return {
            color: this.titleColor,
            textShadow: `3px 3px 0 ${this.titleShadowColor}`,
          }
        },

        CopyRightStyle() {
          return {
            color: this.copyrightTextColor,
          }
        },

        SocialStyle() {
          return {
            color: this.socialColor,
            textShadow: `3px 3px 0 ${this.socialShadowColor}`,
          }
        },

        PlayButtonStyle() {
          return {
            color: this.playButtonColor,
            textShadow: `3px 3px 0 ${this.playButtonShadowColor}`,
          }
        },
      }
    })

}



















