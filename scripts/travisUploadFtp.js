// var fs = require('fs');
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

console.log("Starting FTP deployement");

const config = () => { 
    return {
        host: process.env.FTP_HOST,
        // host: "localhost",
        // host: "ftp.sc3bath3698.universe.wf",
        // host: "test.rebex.net",
        port: 21,
        // port: 22,
        user: process.env.FTP_USER,
        // user: "sc3bath3698@sendwebpage.webqbe.com",
        // user: "travis@webqbe.com",
        // user: "travis",
        // user: "demo",
        password: process.env.FTP_PASSWORD,
        // password: "A1jFbMC0GmXeBGVW4mQtEVb5vzYCZpiU",
        // password: "A1jFbA1jFb",
        // password: "password",
        localRoot: "./",
        remoteRoot: "/",
        // include: ["*.js", "*.js.map", "*.json", "*.html"],
        include: ["*", "**/*"],
        exclude: ["node_modules/**", "node_modules/**/.*", "node_modules/**/.*/**", ".git/**", "src/__test__/**", ".*", "*.ts"],
        sftp: false,
        forcePasv: true,
    }
}


if (process === null) {
    console.error("Error : process is null.");
}
else {
    // uploadToFTP();

    console.log("# ftp.host :", config().host);
    console.log("# ftp.user :", config().user);
    console.log("# ftp.password.length :", config().password.length);
    console.log("# ftp.localRoot :", config().localRoot);
    console.log("# ftp.remoteRoot :", config().remoteRoot);
    console.log("# ftp.port :", config().port);
    // console.log("# ftp :", config())

    ftpDeploy.on("uploading", function(data) {
        console.log(`(${Math.floor(( data.transferredFileCount / data.totalFilesCount ) * 100)}%) - Uploading ${data.filename} ...`)
    });
    ftpDeploy.on("upload-error", function(data) {
        console.warn(`Upload error on ${data.filename} - `, data)
    });

    ftpDeploy
    .deploy(config())
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
