document.addEventListener('DOMContentLoaded', () => {
  const styles = document.createElement('style');
  styles.textContent = `
      a {
        text-decoration: none;
      }

      a::after {
        display: none;
        content: '';
      }

      nav,
      footer {
        display: none;
      }

      .t-song-details__marquee,
      .t-song-details__marquee__content {
        margin: 0;
        padding: 0;
      }

      .t-song-details__marquee::after {
        display: none;
      }

      .t-song-details__marquee__copy {
        display: block;
        width: 100%;
        padding: 0;
      }

      .t-song-details__marquee__copy h2 {
        font-size: 20px;
        font-weight: normal;
        margin-bottom: 0;
      }

      .t-song-details__marquee__copy .large {
        font-size: 12px;
        font-weight: normal;
        margin: 0 !important;
      }

      .t-song-details__marquee__copy .underline {
        display: none;
      }

      .social-icons {
        display: none !important;
      }

      .btn-favorite,
      .image-container-mobile,
      .t-song-details__audio,
      .t-song-details__marquee__image,
      .t-song-details__marquee__background-wrap,
      .t-song-details > .container {
        display: none !important;
      }

      .t-song-details__info {
        margin: 0;
        padding: 0;
      }

      #chordPro_nav {
        display: none;
      }

      .transposeControls {
        position: absolute;
        z-index: 1000;
        top: 0;
        right: 0;
        display: flex;
        padding: 0 !important;
      }

      .transposeControls select {
        margin-left: 8px !important;
        padding: 0 !important;
        border: 0 !important;
      }

      .transposeControls-container::before {
        font-weight: bold;
        padding-top: 1px;
        content: 'Key:';
      }

      .transposeControls p,
      .transposeControls span {
        display: none;
      }

      .chord-pro-disp {
        font-size: 16px;
        margin: 0 !important;
        column-count: 2;
        line-height: 1em !important;
      }

      .chord-pro-lyric {
        height: unset !important;
      }

      .chord-pro-line {
        margin: 0 !important;
      }

      .chord-pro-br {
        display: none;
      }

      .t-song-details__info .col-sm-6 {
        position: unset;
        width: 100%;
      }

      .t-song-details__details {
        display: block;
        column-count: 2;
        margin-top: 16px !important;
      }

      .song_taxonomy .detail {
        font-size: 8pt !important;
        padding: 0;
        border: 0;
        line-height: 1em !important;
      }

      .song_taxonomy .detail > span {
        width: 120px;
      }

      .t-setlist-details__related-list {
        display: none;
      }

      @media print {
        .transposeControls {
          display: none !important;
        }
      }

      .__iw-edit {
        cursor: pointer;
        margin: 4px;
      }
  `;
  document.head.append(styles);

  // edit button to toggle contenteditable
  const edit = document.createElement('u');
  edit.innerText = "Edit OFF";
  edit.className = '__iw-edit';
  edit.onclick = () => {
    const newState = document.body.getAttribute('contenteditable') !== 'true';
    document.body.setAttribute('contenteditable', newState);
    edit.innerText = newState ? 'Edit ON' : 'Edit OFF';
  };
  document.querySelector('.transposeControls').prepend(edit);
});
