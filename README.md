<!-- Shields.io badges -->
&nbsp;![GitHub contributors](https://img.shields.io/github/contributors/v1br/bitburner-but-better?style=flat-square&color=#00ff01)&nbsp;&nbsp;&nbsp;![GitHub issues](https://img.shields.io/github/issues-pr/v1br/bitburner-but-better?style=flat-square&color=#00ff01)&nbsp;&nbsp;&nbsp;![GitHub issues](https://img.shields.io/github/issues/v1br/bitburner-but-better?style=flat-square&color=#00ff01)

<!-- MAIN SECTION -->
<br />
<p align="center">

  <h3 align="center">bitburner-but-better</h3>
  <h5 align="center"><img src="dance.gif" width="48px" /></h5>

  <p align="center">
    A collection of simple yet useful scripts to make bitburner fun.<br />
    <br />
    <a href="https://github.com/v1br/bitburner-but-better/">View</a>
    |
    <a href="https://github.com/v1br/bitburner-but-better/pulls">Pulls</a>
    |
    <a href="https://github.com/v1br/bitburner-but-better/issues">Issues</a>
    |
    <a href="https://github.com/v1br/bitburner-but-better?tab=MIT-1-ov-file">License</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/javascript-292929?logo=javascript">
    <img src="https://img.shields.io/badge/bitburner-292929?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAADVUExURQAAAAD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/AQD/Af///9eobEEAAABGdFJOUwAACxJHG0Q+ZFcoF3wyohmJeTmV4uMdwnurrDXTqYjvN4tYlIU4XZ0rTI4Hs4LFqlS0XrEihowIgx+bBhyWJwy2FRQTZkrnWbhTAAAAAWJLR0RGF7r57QAAAAd0SU1FB+kEHhcsNc4yfP4AAADPSURBVBjTNc/XFoIwEATQiQiCEgxiL6CoWLAhiGCv//9LJqL7tHsfZs8AYnJSPi/l8B9ZKaiaphYUWVzFkk71DPhSKsIoMwGmKYCVjQwqVrVmVX5Q50AazWaDcKgbaLU7tNuzNc3udWmn3YLTJwM3C3UHpO/AILaLDODaRIQOgdHY88YjYPj9MpnO5v5i4c/ZcsVhvQm2YWQqihnt/Hizxj5kSNLD8XhIE7BwD5xiDufL5cwhPvEy19s9SR9B8EiTZ3AV9aLXWwKlkN5qBHwAmk4XTpNfXmYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDQtMzBUMjM6NDQ6NTMrMDA6MDBheag2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTA0LTMwVDIzOjQ0OjUzKzAwOjAwECQQigAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wNC0zMFQyMzo0NDo1MyswMDowMEcxMVUAAAAASUVORK5CYII=">
  </p>
</p>

---

Files:
```bash
home
├─ AutoLink.exe
├─ BruteSSH.exe
├─ DeepscanV1.exe
├─ DeepscanV2.exe
├─ FTPCrack.exe
├─ HTTPWorm.exe
├─ NUKE.exe
├─ SQLInject.exe
├─ ServerProfiler.exe
├─ fl1ght.exe
├─ log/y.txt
├─ relaySMTP.exe
├─ scripts/attack.js
├─ scripts/boost.js
├─ scripts/cowsay.js
├─ scripts/curl.js
├─ scripts/drain.js
├─ scripts/time.js
├─ scripts/touch.js
└─ scripts/tree.js
```

Aliases:
```bash
alias bssh=run BruteSSH.exe
alias cftp=run FTPCrack.exe
alias cowsay=run /scripts/cowsay.js
alias exe=ls / -l --grep .exe
alias find=ls -l --grep
alias flight=run fl1ght.exe
alias js=ls scripts -l --grep .js
alias nmap=analyze
alias nuke=run NUKE.exe
alias porthack=run BruteSSH.exe; run FTPCrack.exe; run relaySMTP.exe; run HTTPWorm.exe; run SQLInject.exe
alias rmdir=rm -r
alias rsmtp=run relaySMTP.exe
alias sa=scan-analyze
alias sqli=run SQLInject.exe
alias ssh=connect
alias time=run /scripts/time.js
alias touch=cp /log/y.txt /log/x.txt; run /scripts/touch.js
alias tree=run /scripts/tree.js
alias worm=run HTTPWorm.exe
```

---

📂 Running the project locally:

Run this command to clone the entire repository:
`https://github.com/v1br/bitburner-but-better.git`

Then copy the files into your `bitburner` save-file and restart the game. You need to update your aliases to the ones shown above. Make sure the filenames and pathnames match the stucture provided.

Test by running `cowsay moo`, if it works, the rest should too!

---

💻 Contributing to the project:

```bash
# [ fork the repository ]
git clone https://github.com/username/bitburner-but-better.git && cd bitburner-but-better
git branch -b new-feature
# [ apply your changes ]
git add changes
git commit -m "meaningful message"
git push origin new-feature
# [ create a pull request ]
```
> [!IMPORTANT]
> Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

---

<p align="center">
  <a href="https://kopimi.com/" target="_blank" rel="noopener noreferer"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Kopimi_k.svg" width="24px" /></a>
</p>

