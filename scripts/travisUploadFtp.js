// var fs = require('fs');
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

console.log("Inside ftpUpload.js");

const config = {
        host: process.env.FTP_HOST,
        port: 21,
        username: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        // localRoot: process.env.ftp_localPath,
        // remoteRoot: process.env.ftp_remotePath
        localRoot: "./",
        remoteRoot: "/",
        // include: ["*.js", "*.js.map", "*.json", "*.html"],
        include: ["*", "**/*"],
        exclude: ["node_modules/**", "node_modules/**/.*", ".git/**", "src/__test__/**", ".*", "*.ts"],
        forcePasv: true,
        sftp: false
    }


if (process === null) {
    console.error("Error : process is null.");
}
else {
    // uploadToFTP();
    ftpDeploy
    .deploy(config)
    .then(res => console.log("ftpDeploy done :", res))
    .catch(err => console.error('Error while deploying (ftpDeploy) :', err));
}

// function getFiles(dir, files_) {
//     files_ = files_ || [];
//     var files = fs.readdirSync(dir);
//     for (var i in files) {
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()) {
//             getFiles(name, files_);
//         } else {
//             files_.push({ full_path: name, rel_path: files[i] });
//         }
//     }
//     return files_;
// }

// function uploadToFTP(files) {
//     var ftp = new FtpClient();
//     var ftpConfig = getConfiguration();

//     console.log("ftp.host =" + ftpConfig.host);
//     console.log("ftp.username =" + ftpConfig.username);
//     console.log("ftp.password length =" + ftpConfig.password.length);
//     console.log("ftp.localRoot =" + ftpConfig.localRoot);
//     console.log("ftp.remoteRoot =" + ftpConfig.remoteRoot);
//     console.log("ftp.port =" + ftpConfig.port);

//     ftp.deploy(ftpConfig, function (err, fileName) {
//         if (err) {
//             console.log("error " + err);
//         }
//         else {
//             console.log("Completed uploading");
//         }
//     });
// }
