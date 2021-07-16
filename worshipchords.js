document.addEventListener('DOMContentLoaded', () => {
  const styles = document.createElement('style');
  styles.textContent = `
      #header,
      #navigation,
      #sidebar,
      .div-right,
      #footer,
      .entry ~ * {
        display: none !important;
      }

      #wrapper {
        padding: 0;
      }

      #main {
        padding: 0;
        width: 100% !important;
      }

      .archive_header {
        border: 0;
        margin: 0;
        padding: 0;
        float: unset;
      }

      .entry > * {
        display: none;
      }

      .entry > .transpose-keys {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
      }

      .entry > pre {
        display: block;
        line-height: 1.2em;
      }

      @media print {
        .transpose-keys,
        .__iw-edit {
          display: none !important;
        }
      }

      .__iw-edit {
        position: absolute;
        top: 0;
        left: 100%;
        cursor: pointer;
        font-size: 15px;
        text-decoration: underline;
      }
  `;
  document.head.append(styles);

  // edit button to toggle contenteditable
  const edit = document.createElement('div');
  edit.innerText = 'Edit OFF';
  edit.className = '__iw-edit';
  edit.onclick = () => {
    const newState = document.body.getAttribute('contenteditable') !== 'true';
    document.body.setAttribute('contenteditable', newState);
    edit.innerText = newState ? 'Edit ON' : 'Edit OFF';
  };
  document.querySelector('#main').prepend(edit);
});
