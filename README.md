# SendWebPage-API

Essai
```
after_success:
- find . -type d \( -path "./.*" -o -path "./node_modules" \) -prune -o -name "*" -print -exec curl --ftp-create-dirs -T {} ftp://your.server.com/dir/ --user ${SFTP_USER}:${SFTP_PASSWORD} \;
```