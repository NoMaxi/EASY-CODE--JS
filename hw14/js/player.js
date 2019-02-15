class VideoPlayer {
    constructor(settings) {
        this._settings = Object.assign(VideoPlayer.DefaultSettings, settings);
    }

    init() {
        if (!this._settings.videoUrl) return console.error('Provide video Url');
        if (!this._settings.videoPlayerContainer) return console.error('Please provide video player container');

        // Создаем разметку для video
        this._addTemplate();
        // Найти все элементы управления
        this._setElements();
        // Установить обработчики событий
        this._setEvents();
    }

    toggle() {
        const method = this._video.paused ? 'play' : 'pause';
        this._toggleBtn.textContent = this._video.paused ? '❚ ❚' :  '►';
        this._video[method]();
    }

    _videoProgressHandler() {
        const percent = (this._video.currentTime / this._video.duration) * 100;
        this._progress.style.flexBasis = `${percent}%`;
    }

    _peremotka(event) {
        this._video.currentTime = (event.offsetX / this._progressContainer.offsetWidth) * this._video.duration;
    }

    /**
     * set video volume rate
     * @private
     */
    _setVolume() {
        this._video.volume = this._volumeContainer.value;
    }

    /**
     * set video playback rate
     * @private
     */
    _setPlaybackRate() {
        this._video.playbackRate = this._playbackRateContainer.value;
    }

    /**
     * rewind the video backward for amount of seconds passed to the settings
     * @private
     */
    _skipBackward() {
        this._video.currentTime += this._settings.skipBackward;
    }

    /**
     * rewind the video forward for amount of seconds passed to the settings
     * @private
     */
    _skipForward() {
        this._video.currentTime += this._settings.skipForward;
    }

    /**
     * rewind the video backward or forward for amount of seconds passed to the settings according to the event location (left or right side of the video)
     * @param event
     * @private
     */
    _skip(event) {
        event.offsetX / this._video.offsetWidth <= 0.5 ? this._skipBackward() : this._skipForward();
    }

    _addTemplate() {
        const template = this._createVideoTemplate();
        const container = document.querySelector(this._settings.videoPlayerContainer);
        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('Video container was not found');
    }

    _setElements() {
        this._videoContainer = document.querySelector(this._settings.videoPlayerContainer);
        this._video = this._videoContainer.querySelector('video');
        this._toggleBtn = this._videoContainer.querySelector('.toggle');
        this._progress = this._videoContainer.querySelector('.progress__filled');
        this._progressContainer = this._videoContainer.querySelector('.progress');
        // set volume input container
        this._volumeContainer = this._videoContainer.querySelector('input[name="volume"]');
        // set playbackRate input container
        this._playbackRateContainer = this._videoContainer.querySelector('input[name="playbackRate"]');
        // set skip-backward button
        this._skipBackwardBtn = this._videoContainer.querySelectorAll('.skip')[0];
        // set skip-forward button
        this._skipForwardBtn = this._videoContainer.querySelectorAll('.skip')[1];
    }

    _setEvents() {
        this._video.addEventListener('click', () => this.toggle());
        this._toggleBtn.addEventListener('click', () => this.toggle());
        this._video.addEventListener('timeupdate', () => this._videoProgressHandler());
        this._progressContainer.addEventListener('click', (e) => this._peremotka(e));
        // add input event to _volumeContainer
        // https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders
        this._volumeContainer.addEventListener('input', () => this._setVolume());
        // add input event to _playbackRateContainer
        this._playbackRateContainer.addEventListener('input', () => this._setPlaybackRate());
        // add click event to _skipBackwardBtn
        this._skipBackwardBtn.addEventListener('click', () => this._skipBackward());
        // add click event to _skipForwardBtn
        this._skipForwardBtn.addEventListener('click', () => this._skipForward());
        // add double click event to _video - for double click skip implementation
        this._video.addEventListener('dblclick', (e) => this._skip(e));
    }

    _createVideoTemplate() {
        return `
            <div class="player">
                <video class="player__video viewer" src="${this._settings.videoUrl}"> </video>
                <div class="player__controls">
                    <div class="progress">
                        <div class="progress__filled"></div>
                    </div>
                    <button class="player__button toggle" title="Toggle Play">►</button>
                    <input type="range" name="volume" class="player__slider" title="volume" min=0 max="1" step="0.05" value="${this._settings.volume}">
                    <input type="range" name="playbackRate" class="player__slider" title="playback rate" min="0.5" max="2" step="0.1" value="1">
                    <button data-skip="${this._settings.skipBackward}" class="player__button skip" title="skip ${Math.abs(this._settings.skipBackward)}s backward">« ${this._settings.skipBackward}s</button>
                    <button data-skip="${this._settings.skipForward}" class="player__button skip" title="skip ${this._settings.skipForward}s forward">${this._settings.skipForward}s »</button>
                </div>
            </div>
        `;
    }

    static get DefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: 'body',
            volume: 1,
            // set default backward and forward skip time (in sec) - will rewind the video by button click
            skipBackward: -1,
            skipForward: 1
        }
    }
}


const playerInstance = new VideoPlayer({
    videoUrl: 'video/mov_bbb.mp4'
});

playerInstance.init();
