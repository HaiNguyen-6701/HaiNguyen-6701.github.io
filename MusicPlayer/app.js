
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'TUAN_HAI'
const MUSIC_LOVE = 'HAI_LOVE_SONG'
const playList = $('.playlist')
const cd = $('.cd')
const heading = $('header marquee')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progess = $('#progess')
const volumeBtn = $('.volume-btn')
const volume_change = $('#controls_lever_range')
const preBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const volumnControl = $('#volumn-control')
const vietnamBtn = $('.vn-song-btn')
const usBtn = $('.us-song-btn')
const loveBtn = $('.love-song-btn')
const listAll = $$('.list-song')
const addLoveSong = $('.add-love')
const optionBtn = $$('.option')
const addToLove = $('.add-to-love')
const overlay = $('.overlay')
const progressduration = $(".progress__duration")
const progresscurrent = $(".progress__current")

let randomArray = []
const app = {
    currentIndex: 0,
    currentList: 'us',
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    configLove:JSON.parse(localStorage.getItem(MUSIC_LOVE)) || {},
    songs: {
        us: [
            {
                name: 'So Far Away',
                singer: 'Adam Christopher',
                path: './assets/songs/y2mate.com - So Far Away Acoustic  Martin Garrix  David Guetta Cover by Adam Christopher.mp3',
                image: './assets/img/so-far-away.jpg'
            },
                {
                name: 'We dont talk anymore',
                singer: 'Charlie Puth (feat. Selena Gomez)',
                path: './assets/songs/y2mate.com - Charlie Puth  We Dont Talk Anymore feat Selena Gomez Official Video.mp3',
                image: './assets/img/we-dont-talk-anymore.jpg'
            },
                {
                name: 'Dusk Till Dawn',
                singer: 'ZAYN',
                path: './assets/songs/y2mate.com - ZAYN  Dusk Till Dawn Official Video ft Sia.mp3',
                image: './assets/img/dusk-till-dawn.jpg'
            },
                {
                name: 'You Are The Reason',
                singer: 'Calum Scott',
                path: './assets/songs/y2mate.com - Calum Scott  You Are The Reason Official Video.mp3',
                image: './assets/img/you-are-the-reason.jpg'
            },
                {
                name: 'How Long',
                singer: 'Charlie Puth',
                path: './assets/songs/y2mate.com - Charlie Puth  How Long Official Video.mp3',
                image: './assets/img/how-long.jpg'
            },
            {
                name: 'Attention',
                singer: 'Charlie Puth',
                path: './assets/songs/y2mate.com - Charlie Puth  Attention Official Video.mp3',
                image: './assets/img/attention.jpg'
            },
                {
                name: 'Closer',
                singer: 'The Chainsmokers (ft Halsey)',
                path: './assets/songs/y2mate.com - The Chainsmokers  Closer Lyric ft Halsey.mp3',
                image: './assets/img/closer.jpg'
            },
                {
                name: 'Treat You Better',
                singer: 'Shawn Mendes',
                path: './assets/songs/y2mate.com - Shawn Mendes  Treat You Better.mp3',
                image: './assets/img/treat-you-better.jpg'
            }
        ],
        vietnamese: [
            {
                name: 'Ch???y Ngay ??i (RUN NOW)',
                singer: 'S??n T??ng MTP',
                path: './assets/songs/vietnam/y2mate.com - CH???Y NGAY ??I  RUN NOW  S??N T??NG MTP  Official Music Video.mp3',
                image: './assets/img/vietnam/chay-ngay-di.jpg'
            },
            {
                name: 'D??n Ch??i X??m',
                singer: 'JustaTee, RPT MCK',
                path: './assets/songs/vietnam/y2mate.com - JustaTee RPT MCK  D??n Ch??i X??m  Team Karik  RAP VI???T MV Lyrics.mp3',
                image: './assets/img/vietnam/dan-choi-xom.jpg'
            },
            {
                name: 'Th??ng N??m',
                singer: 'Soobin x Freak D',
                path: './assets/songs/vietnam/y2mate.com - Th??ng N??m Lofi Ver  Soobin x Freak D.mp3',
                image: './assets/img/vietnam/thang-nam.jpg'
            },
            {
                name: 'Anh ???? Quen V???i C?? ????n',
                singer: 'S??n T??ng',
                path: './assets/songs/vietnam/y2mate.com - Anh ???? Quen V???i C?? ????n  Soobin Ho??ng S??n  Official Music Video 4K.mp3',
                image: './assets/img/vietnam/anh-da-quen-voi-co-don.jpg'
            },
            {
                name: 'Th???ng ??i??n',
                singer: 'JUSTATEE x PH????NG LY',
                path: './assets/songs/vietnam/y2mate.com - TH???NG ??I??N  JUSTATEE x PH????NG LY  OFFICIAL MV.mp3',
                image: './assets/img/vietnam/thang-dien.jpg'
            },
            {
                name: '???? L??? Y??u Em Nhi???u',
                singer: 'JustaTee',
                path: './assets/songs/vietnam/y2mate.com - JustaTee  ???? L??? Y??u Em Nhi???u Official MV.mp3',
                image: './assets/img/vietnam/da-lo-yeu-em-nhieu.jpg'
            },
            {
                name: 'Heartbreaker',
                singer: 'V?? Thanh V??n (Cover)',
                path: './assets/songs/vietnam/y2mate.com - VTV ?? NHA 1M  Ep05 Imma heartbreaker.mp3',
                image: './assets/img/vietnam/heartbreaker.jpg'
            },
            {
                name: 'Mu???n r???i m?? sao c??n',
                singer: 'S??n T??ng MTP',
                path: './assets/songs/vietnam/y2mate.com - S??N T??NG MTP  MU???N R???I M?? SAO C??N  OFFICIAL MUSIC VIDEO.mp3',
                image: './assets/img/vietnam/muon-roi-ma-sao-con.jpg'
            },
            {
                name: 'Crying Over You',
                singer: 'JustaTee ft Binz',
                path: './assets/songs/vietnam/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
                image: './assets/img/vietnam/crying-over-you.jpg'
            }
        ],
        love: []

    },
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    setConfigLove: function(arrayLove) {
        this.configLove = arrayLove;
        localStorage.setItem(MUSIC_LOVE, JSON.stringify(this.configLove))
    },

    render: function() {
        const html = this.songs[this.currentList].map(function(song, index) {
            return `
                <div class="song ${index === app.currentIndex ? 'active' :''}" data-index = ${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h icon-option"></i>
                    </div>
                </div>
            `     
        })
        playList.innerHTML = html.join('')
        
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.songs[this.currentList][this.currentIndex]
            }
        } )
    },
    
    handleEvents:  function() {
        _this = this
        cdWidth = cd.offsetWidth;
        //x??? l?? cd rotated 
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //ten seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause()
        //x??? l?? ph??ng to thu nh??? cd
        document.onscroll = function() {
            const  scrollTop = document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop;
            if (newCdWidth <= 0) {
                cd.style.width = 0 + 'px';
            } else {
                cd.style.width = newCdWidth + 'px';
            }
            cd.style.opacity = newCdWidth/cdWidth
        }
        //x??? l?? khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        //khi b??i h??t ???????c play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        //khi b??i h??t b??? pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // X??? l?? ??m thanh b??i h??t
        volume_change.oninput = function(e){
            audio.volume = e.target.value/100;
        }

        //khi ti???n ????? b??i h??t thay ?????i
        // Khi ti???n ????? b??i h??t thay ?????i
         audio.ontimeupdate = function () {
        if (audio.duration) {
          const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
          progress.value = progressPercent;
        }
            _this.timeCurrent()
            _this.timeDuration()
        }
        //x??? l?? khi tua b??i h??t
        progress.oninput = function(e) {
            const seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
        }
        //khi next b??i h??t
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } if (_this.isRepeat) {
                _this.playRepeatSong()
            } 
            else {
                _this.nextSong()
            }
            _this.setConfig('currentIndex', _this.currentIndex)
            _this.render()
            _this.scrollToActiveSong()
            audio.play()
        }
        preBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } if (_this.isRepeat) {
                _this.playRepeatSong()
            }
            else {
                _this.previousSong()
            }
            _this.setConfig('currentIndex', _this.currentIndex)
            _this.render()
            _this.scrollToActiveSong()
            audio.play()
        }

        // X??? l?? b???t/t???t Random b??i h??t
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Mute & UnMute
        volumeBtn.addEventListener("click", function(){
            if(audio.muted) {
              audio.muted = false;
              volumeBtn.classList.remove('active', audio.muted)
              volume_change.classList.remove('active', audio.muted)
            } else {
              audio.muted = true;
              volumeBtn.classList.add('active', !audio.muted)
              volume_change.classList.add('active', audio.muted)
            }
          }, false);
          

        //x??? l?? l???p l???i b??i h??t
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active')
        }

        // X??? l?? sang b??i kh??c khi ch???y xong
        
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }
        //l???ng nghe h??nh vi click v??o playlist
        playList.onclick = function(e) {
            const allSongNode = e.target.closest('.song')
            const songNote = e.target.closest('.song:not(.active)')
            const optionNode = e.target.closest('.option')
            if(e.target.closest('.song:not(.active)') || e.target.closest('.option')) {
                if(e.target.closest('.song:not(.active)') && !e.target.closest('.option')) {
                    _this.currentIndex = parseInt(songNote.getAttribute('data-index'))   //can use element.dataset.index instead
                    _this.loadCurrentSong()
                    audio.play()
                    _this.render()
                }
                if(e.target.closest('.option')) {
                    if(_this.currentList === 'love') {
                        //x??a b??i h??t
                        addLoveSong.classList.add('add-love-active')
                        overlay.classList.add('add-overlay-active')
                        addToLove.onclick = function() {
                            var indexTrace = parseInt(allSongNode.getAttribute('data-index'))
                            _this.songs['love'].splice(indexTrace ,1)
                            _this.render()
                            _this.setConfigLove(_this.songs['love'])
                            alert(`b???n ???? x??a b??i h??t ???? ch???n kh???i m???c y??u th??ch`)   
                            addLoveSong.classList.remove('add-love-active')
                            overlay.classList.remove('add-overlay-active') 
                        }
                        //x??a b??i h??t
                    } else {
                        //th??m b??i h??t
                        addLoveSong.classList.add('add-love-active')
                        overlay.classList.add('add-overlay-active')
                        addToLove.onclick = function() {
                            var indexTrace = parseInt(allSongNode.getAttribute('data-index'))
                            console.log(indexTrace)
                            if(_this.currentList === 'us') {
                                newLove = _this.songs['us'][indexTrace]
                            } else {
                                newLove = _this.songs['vietnamese'][indexTrace]
                            }
                            _this.setConfigLove(newLove)
                            if(!_this.songs['love'].includes(newLove)) {
                                _this.songs['love'].push(newLove)
                                _this.setConfigLove(_this.songs['love'])
                                alert(`b???n ???? th??m b??i h??t ${newLove.name} v??o m???c y??u th??ch`)
                            } else {
                                alert('B??i h??t n??y ???? c?? trong m???c y??u th??ch')
                            }
                            console.log(_this.songs['love'])
                            addLoveSong.classList.remove('add-love-active')
                            overlay.classList.remove('add-overlay-active') 
                            
    
                        }
                        //th??m b??i h??t
           
                    }
                }

            }
        }

        overlay.onclick = function() {
            overlay.classList.remove('add-overlay-active')
            addLoveSong.classList.remove('add-love-active')
        }
        //x??? l?? ??i???u ch???nh ??m l?????ng c???a b??i h??t
        volumnControl.oninput = function(e) {
            const seekVolumn = e.target.value/ 100;
            audio.volumn = seekVolumn;
        }
        //x??? l?? ?????i list b??i h??t
        vietnamBtn.onclick = function() {
            addToLove.innerText = 'Th??m v??o danh s??ch b??i h??t y??u th??ch'
            usBtn.classList.remove('active')
            loveBtn.classList.remove('active')
            vietnamBtn.classList.add('active')
            _this.currentList = 'vietnamese'
            _this.currentIndex = 0
            _this.loadCurrentSong()
            _this.render()
            audio.play()
            playBtn.click()
        } 
        usBtn.onclick = function() {
            addToLove.innerText = 'Th??m v??o danh s??ch b??i h??t y??u th??ch'
            vietnamBtn.classList.remove('active')
            loveBtn.classList.remove('active')
            usBtn.classList.add('active')
            _this.currentList = 'us'
            _this.currentIndex = 0
            _this.loadCurrentSong()
            _this.render()
            audio.play()
            playBtn.click()
        } 
        loveBtn.onclick = function() {
            if(_this.songs['love'].length === 0) {
                alert('b???n ch??a c?? b??i h??t y??u th??ch')
            } else {
            addToLove.innerText = 'X??a b??i h??t kh???i m???c y??u th??ch'
            vietnamBtn.classList.remove('active')
            usBtn.classList.remove('active')
            loveBtn.classList.add('active')
            _this.currentList = 'love'
            _this.currentIndex = 0
            _this.loadCurrentSong()
            _this.render()
            audio.play()
            playBtn.click()
            }
        } 
        //x??? l?? khi click th??m v??o b??i h??t y??u th??ch
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    scrollToActiveSong: function() {
        setTimeout(function() {
            $('.song.active').scrollIntoView({behavior: "smooth", block: "center"})
        },150)
    },
    
    loadConfig: function() {
        if(this.config.isRandom) {
            this.isRandom = this.config.isRandom
        } else {
            this.isRandom = false
        }
        if(this.config.isRepeat) {
            this.isRepeat = this.config.isRepeat
        } else {
            this.isRepeat = false
        }
        if(this.config.currentIndex) {
            this.currentIndex = this.config.currentIndex
        } else {
            this.currentIndex = 0
        }
        if(this.configLove.length > 0)  {
            this.songs['love'] = this.songs['love'].concat(this.configLove)
            console.log(this.songs['love'])

        }
        console.log(this.configLove.length)
        this.render()
    },  

    previousSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs[this.currentList].length
        }
        this.loadCurrentSong()
    },

    nextSong : function() {
        this.currentIndex++ 
        if(this.currentIndex >= this.songs[this.currentList].length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    randomSong: function() {
        let randomNum
        do {
            randomNum = Math.floor(Math.random() * this.songs[this.currentList].length)
            if(randomArray.length === this.songs[this.currentList].length ) {
                randomArray.splice(0,7)
            }
        }
        while(randomArray.includes(randomNum))
        randomArray.push(randomNum)
        console.log(randomArray)
        this.currentIndex = randomNum;
        
        this.loadCurrentSong()
    },

    playRepeatSong:function() {
        this.currentIndex = this.currentIndex
        this.loadCurrentSong()
    },

    formatTime: function (sec_num) {
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);
    
        hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
      },
      // hi???n th??? th???i gian b??i h??t hi???n t???i
      timeCurrent: function () {
        setInterval(() => {
          let cur = this.formatTime(audio.currentTime)
          progresscurrent.textContent = `${cur}`;
        }, 100)
      },
      //hi???n th??? th???i gian b??i h??t
      timeDuration: function () {
        if (audio.duration) {
          let dur = this.formatTime(audio.duration)
          progressduration.textContent = `${dur}`;
        }
    },

    start: function() {
        //load config v??o tr??nh duy???t
        this.loadConfig()
        //?????nh ngh??a c??c thu???c t??nh cho object
        this.defineProperties()
        //l???ng nghe v?? x??? l?? c??c s??? ki???n
        this.handleEvents()

        //t???i th??ng tin ?????u ti??n v??o ui khi ch???y ???ng d???ng
        this.loadCurrentSong()
        //render playlist
        this.render()
        //load giao di???n t??? config
        randomBtn.classList.toggle('active',this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
    }
}
app.start()
